
window.onload = () => {

    console.log("-------------2-------------")
    // 2) Підключити скрипт і зробити виборку li елементи в списку
    const allLi = document.querySelectorAll("header li")
    console.log(allLi)


    console.log("-------------3-------------")
    //// 3) Знайти батьківський елемент li елемента через методи пошуку батьківського елементу
    let parent = document.querySelector('li')
    let parentBlock = parent.parentNode
    console.log(parentBlock)
    // // вивести в консоль


    console.log("-------------4-------------")
    // 4) Зробити цикл який знаходить  nextElementSibling після active в списку і додає їх в новий массив
    // {/* <ul class="menu-list">
    // <li>1</li>
    // <li>2</li>
    // <li class="active">3</li>
    // <li>4</li>
    // <li>5</li>
    // </ul>*/}

    let arr = []
    let menuElems = document.querySelectorAll('li')
    let active = document.querySelector('.active')
    console.log(menuElems)
    for (i = 0; i < menuElems.length; i++) {
        if (menuElems[i] == active) {
            arr.push(active.nextElementSibling.innerHTML)
            console.log(arr)
        }
    }

    console.log("-------------5-------------")

    // 5) Створіть класс по додаваню фільма який має такі значення(рік випуску, жанр, назву, кількість переглядів)
    class FilmClass{
        constructor(fYear , fGenre , fName , fViews) {
            this.fYear = fYear
            this.fGenre = fGenre
            this.fName = fName
            this.fViews = fViews
        }
    }
    let Avatar = new FilmClass('2010' , 'Экшен' , 'Аватар' , '600250125')
    let Terminator = new FilmClass('2007' , 'Экшен' , 'Терминатор' , '1021131528')
    let Transformes = new FilmClass('2009' , 'Экшен' , 'Трансформеры' , '453129528')

    console.log(Avatar)
    console.log(Terminator)
    console.log(Transformes)

    console.log("-------------6-------------")
    // 6) За допомогою деструктурізації переберіть массив створених обєктів фільму і виведіть значення по року випуску фільму
    const ArrFilms = [Avatar , Terminator ,Transformes]
    function sortYear(arr){
        console.log([...arr].sort(function (a , b){
            return a.fYear - b.fYear
    }));
    }
    sortYear(ArrFilms)

    console.log("-------------7-------------")
    //  7) створіть такуж функцію але яка сортує по кількості переглядів
    function sortViews (arr){
        console.log([...arr].sort(function (a , b){
            return a.fViews - b.fViews
        }));
    }
    sortViews(ArrFilms)
    // 8) В html виберіть header, footer, nav  та обєднайте отримані селектори в 1 массив
    const [...all] = document.querySelectorAll('header , footer , nav')
    console.log(all)

    // 9) Самостійно опрацюйте можливості виборки череp querySelector
    let classSe = document.querySelector('.menu-list')
    console.log(classSe)
    let iDSeclector = document.querySelector('#Navigation')
    console.log(iDSeclector)
    let [...allSelectors] = document.querySelectorAll('Html , body , header , nav , ul , li , footer')
    console.log(allSelectors)
}
