const express = require('express')
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cohortRouter = require('./routes/cohorts');
const app=express();
app.use(logger('dev'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    methodOverride((req, res) => {
        if (req.body && req.body._method) {
            const method = req.body._method;
            return method;
        }
    })
);
app.use(cookieParser());
//Custom middleware to create and store cookies:
app.use((req,res, next) => {
    const name = req.cookies.name || '';
    res.locals.name = name;
    next();
  })
app.use('/cohorts', cohortRouter);

app.get('/',(req,res)=>{

    res.render('home')
})




const PORT=5000;
const Domain='localhost';


app.listen(PORT, Domain, () => {
    console.log(`Server listening on http://${Domain}:${PORT}`);
})