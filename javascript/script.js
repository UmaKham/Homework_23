let form = document.forms.name_age
let input_name = form.querySelector('.name')
let input_age = form.querySelector('.age')
let btn_sub = form.querySelector('.submit')

let tableRow = document.querySelector('.list')

let userData = []
let num = 1


form.onsubmit = (e) => {
  e.preventDefault();

  let user = {
    id: num++,
    name: input_name.value,
    age: new Date().getFullYear() - input_age.value,
    isDone: false
  }
  
  userData.push(user)
  userLoad(userData)
}

function userLoad (arr) {
  
  for(item of arr) {
    userData = []
    let tbody = document.querySelector('tbody')
    
    let userTr = document.createElement('tr')
    let tdnum = document.createElement('td')
    let tdName = document.createElement('td')
    let tdAge = document.createElement('td')
    let actionimg = document.createElement('td')
    let imgchange = document.createElement('img')
    let imgdelete = document.createElement('img')

    userTr.append(tdnum, tdName, tdAge, actionimg)
    tbody.append(userTr)
    actionimg.append(imgchange, imgdelete)

    imgchange.src = "./img/note.png"
    imgchange.width = "30"
    imgdelete.src = "./img/delete.png"
    imgdelete.width = "30"

    imgdelete.onclick = () => {
      userData.splice(userData.indexOf(item), 1)
      userTr.remove()
    }
    
    tdnum.innerHTML = item.id
    tdName.innerHTML = item.name
    tdAge.innerHTML = item.age

  }
}