function myFunction() {
  let quantity = document.getElementById("Quantity").value;
  let members = document.getElementById("members").innerHTML.split(",");

  if (document.getElementById("TeamCount").checked) {
    // Set its contents:

    let i = 0, n = members.length, len = n / quantity, j = 1;
    while (i < n) {
      let item = document.createElement('li');
      item.appendChild(document.createTextNode(members.slice(i, i += len)));
      // Add it to the list:
      list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
  }
  else if (document.getElementById('NumberPerTeam').checked) {
    // Set its contents:

    let i = 0, n = members.length;
    while (i < n) {
      let item = document.createElement('li');
      item.appendChild(document.createTextNode(members.slice(i, i += quantity)));
      // Add it to the list:
      list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
  }
}
