
const readline = require('readline');
const fs = require('fs')

const interface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        prompt: "> "
    }
);

console.log('Welcome to Todo CLI!');
console.log('----------------------------------------')
console.log('(v) View  • (n) New  • (cX) Complete • (dX) Delete •(s)Save •(q) Quit')
interface.prompt();
let list_items = [];
let completed_item = '';
let deleted_item = '';
interface.on('line', (input) => {
    if (input == 'v') {
        View()
        //interface.prompt(); 
    }
    else if (input == 'n') {
        Add()
    }
    else if (input.startsWith('c')) {

        let indice_item=parseInt(input.substring(1));

        Completed(indice_item);
    }
    else if (input.startsWith('d')) {
        let indice_item=parseInt(input.substring(1));
        Delete(indice_item);


    }
    else if (input == 'q') {
        Quit()

    }
    else if(input=='s'){
        Save();
    }

    
});

function View() {
    //let my_list=list_items;
    if (list_items == 0) {
        console.log('your list is empty')
        interface.prompt();
        
    }
    else {

        for (let i = 0; i < list_items.length; i++) {
            if (list_items[i] == completed_item) {
                console.log(`${i} [✓] ${list_items[i]}`)
                interface.prompt();
            }
            else {
                console.log(`${i} [] ${list_items[i]}`)
                interface.prompt();
            }

        }
        
    }
    console.log('(v) View  • (n) New  • (cX) Complete • (dX) Delete •(s)Save •(q) Quit')
}

function Add() {
    interface.question('What? \n', (answer) => {
        list_items.push(answer);
        interface.prompt();
        console.log('(v) View  • (n) New  • (cX) Complete • (dX) Delete •(s)Save •(q) Quit')
    })
}

function Completed(index) {
    
        for (let i = 0; i < list_items.length; i++) {
            if (index === i) {
                completed_item = list_items[i];
                console.log(`completed, ${list_items[i]}`)
                interface.prompt();
            }

    }
    console.log('(v) View  • (n) New  • (cX) Complete • (dX) Delete •(s)Save •(q) Quit')


}


function Delete(index_item) {

        for (let i = 0; i < list_items.length; i++) {

            if (index_item == i) {
                deleted_item = list_items.splice(i, 1);
                console.log(` ${deleted_item}, is deleted`)

            }

        }
        
        console.log('(v) View  • (n) New  • (cX) Complete • (dX) Delete •(s)Save •(q) Quit')
}
function Save(){
    fs.writeFile('./myList.json',list_items,'utf-8',err=>{
        if(err){
            console.log('error saving the file');
        }else{
            console.log('the file has been saved! to myList.json')
        }
    });
}

function Quit() {
    console.log('see you soon :)')
    interface.close();
}