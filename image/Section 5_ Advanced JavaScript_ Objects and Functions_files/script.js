//function constructor

// var person = {
//     name: `ming`,
//     sex: `male`,
//     height: 160
// };

// var person2 = {
//     name: `lady`,
//     sex: `female`,
//     height: 155
// };


// person.__proto__.nikname = `mingfamily`;

//  var family = [1, 2, 3];
//  family.__proto__.nikname = `gg`;
// function callName(a) {
//     var arge = [...arguments];
//     console.log(a, arge);
//   }
// callName(`1`, `2`, `3`, `4`);

// var nickName = `ming`;

// function callName() {
//      console.log(this)
//      console.log(this.nickName)
//  }
// //callName();

// var auntie = {
//     nickName: `漂亮阿姨`,
//     callName: function () {
//         console.log(this)
//         console.log(this.nickName)
//     },
//     child: {
//         nickName: `child`,
//         callName: callName
//     }
// }
// auntie.child.callName();

// var callSome = auntie.child.callName;

// callSome();


// function PhoneTemplate (brand, withCamara) {
//     this.brand = brand;
//     this.withCamara = withCamara;
//     this.isphone = true;
// }
// // PhoneTemplate.prototype.takePhoto = function () {
// //     if (this.withCamara) {
// //         console.log(this.brand + `照相`);
// //     }else {
// //         console.log(this.brand + `無照相功能`);
// //     }
// // }

// var N3310 = new PhoneTemplate (`nokia`,false);
// var iphone = new PhoneTemplate (`Apple`, true);
// iphone.__proto__.takePhoto = function () {
//     if (this.withCamara) {
//         console.log(this.brand + `照相`);
//     }else {
//         console.log(this.brand + `無照相功能`);
//     }
// }

// var john = {
//     name: `John`,
//     yearOfBirth: 1990,
//     job: `teacher`,
// };

//  var Person = function(name, yearOfBirth, job) {
//      this.name = name;
//     this.yearOfBirth = yearOfBirth;
//      this.job = job;
//  };
//  Person.prototype.calculateAge  = function () {
//     return 2016 - this.yearOfBirth
//  };

// Person.prototype.lastName = `Smtih`;




// var john = new Person(`Jack`, 1992, `teacher`);

// var jane = new Person(`Jane`, 1969, `designer`);

// var mark = new Person(`Mark`, 1948, `retired`);

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// var PersonProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearOfBirth)
//     }
// }

// var john = Object.create(PersonProto);
// john.yearOfBirth = 1990;
// john.name = `John`;
// john.job = `teacher`;

// var jane = Object.create(PersonProto, {
//     name : { value: `Jane`},
//     yearOfBirth: { value: 1969},
//     job : {value :`designer`}
// });

// var a  = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);



// var obj1 = {
//     name: `John`,
//     age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);


// //var age = 27;
// var obj = {
//     name: `Jonas`,
//     city: `Lisbon`,
//     age: 20
// }
// function change (obj, obj) {
//     obj.age  = 30;
//     obj.city = `San Fracisco`;
// };
// change(obj, obj);
// //console.log(age);
// console.log(obj.city);
// console.log(obj.age);

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc (arr,f) {
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++) {
//         arrRes.push(f(arr[i]));
//     };
//     return arrRes;
// };
// function calculateAge (el) {
//     return 2016 - el;
// };
// function isFullAge(el) {
//     return el >= 18;
// };

// function maxHearRate (el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     }else {
//         return -1;
//     }
// }
// var ages = arrayCalc(years, calculateAge);
// var rates = arrayCalc(ages, maxHearRate);
// var fullAges = arrayCalc(ages, isFullAge);
// console.log(ages);
// console.log(rates);
// console.log(fullAges);


// function interviewQuestion (job) {
//     if(job === `designer`) {
//         return function (name) {
//             console.log(name + "can you please explan what UX design is?");
//         }
//     }else if (job === `teacher`){
//             return function (name) {
//                 console.log(`What subject do you teach,` + name);
//             }
//         }else {
//         return function (name) {
//             console.log(name + `What do you do?`);
//         }
//     }
// }
// var teachQuestion = interviewQuestion(`teacher`);
// teachQuestion(`john`);
// interviewQuestion(`teacher`)(`Mark`);

// function game () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function (good) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - good);
//     console.log(score);

// })(5);

// function retiredment (retiredmentAge) {
//     var a = ` years left until retirement.`;
//     return function (yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retiredmentAge - age) + a)
//     };
// };
// var retirementTW = retiredment(65);
// var retirementGermany = retiredment(65);
// var retirementIceland = retiredment(67);
// retirementTW(`1992`);
// retirementGermany(`1990`);
// retirementIceland(`1990`);


// function interviewQuestion(job) {
//     return function (name) {
//         if(job === `designer`) {
//                console.log(name + " can you please explan what UX design is?");
//         }else if (job ===`teacher`){
//             console.log(`What subject do you teach,` + name);
//     }else {
//         console.log(name + `What do you do?`);
//         }
//     }
// }
// interviewQuestion(`designer`)(`aa`);

// for(var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     },i * 1000);
// };

// for(let i = 1; i <=60; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 1000);
// };

// for(i = 1; i <=5; i ++) {
//     console.log(i);
// }

// var john = {
//     name: `John`,
//     age: 26,
//     job:`techer`,
//     presentation: function (style, timeOfDay) {
//         if(style === `formal`) {
//             console.log(`Good ${timeOfDay} Ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} year's old.`);
//         }else if (style === `friendly`) {
//             console.log(`Hello! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} year's old. Have a nice ${timeOfDay}`);
//         }
//       }
// }
// var emily = {
//     name: `Emily`,
//     age:35,
//     job:`designer`
// }
// john.presentation(`formal`,`morning`);
// john.presentation.call(emily, `friendly` , `afternoon`);

// // john.presentation.apply(emily, [`friendly`,`afternoon`])
// var johnFriendly = john.presentation.bind(john);
// johnFriendly( `friendly`,`morning`);
// var b = 0;
// function a () {
//     for(let i = 0; i <= 10; i++) {
//             setTimeout(function() {
//                 if(i !== 10) {
//                     var g = document.querySelector(`.g`);
//                     g.textContent = i;
//                     g.style.color = `red`;
//                     g.style.float = `left`;
                    
//                 }else{
//                     b++;
//                     document.querySelector(`.a`).textContent = b;
//                     i = 0;
//                     a();
//                 }
//             }, i * 1000);
//     };
// }
// a();
// 大樂透選號
var lottery,n;
function lott(e) {
    lottery=[];
for(let i = 0; i < 6; i ++) {
    n = Math.floor(Math.random() * 49) +1;
    var lottlen = lottery.length;
    if(lottery.indexOf(n) === -1 && lottlen <= 5) {
        lottery.push(n);
    } else if(lottlen < 6) {
            lott();
        }
    }
    console.log(lottery)
    console.log(this)
    var str = document.querySelector(`.lottery-return`);
    str.innerHTML = lottery.join(` `);
    //document.querySelector(`.btn-lottery`).removeEventListener(`click`,lott);
}
document.querySelector(`.btn-lottery`).addEventListener(`click`, lott,);


// function createfn(e){
//     var node = document.createElement(`p`);
//     var textnode = document.createTextNode(`Hello world! hello`);
//     node.appendChild(textnode);
//     var tag = document.getElementById(`div1`);
//     tag.replaceChild(node,tag.childNodes[1]);
//     console.log(e.target.tagName)
// };
// document.querySelector(`.btn-2`).addEventListener(`click`,createfn);


// window.onload = function () {
    
// var ul = document.getElementById(`myList`);
// var fragment = document.createDocumentFragment();

// for(let i = 0; i < 3; i++) {
//     let li = document.createElement(`li`);
//     li.appendChild(document.createTextNode(`item` +(i + 1)));
//     fragment.appendChild(li);
//     li.className = `item`;
// }
// ul.appendChild(fragment);
// }
// document.write(`<h2 class="ggggggg">Hellooooô</h2>`);
// document.write(`<h2 class="ggggggg">Hellooooô</h2>`);
// var div1 = document.getElementById(`div1`);

// var reNode = document.querySelectorAll(`p`)[1];
// var newdd = document.createElement(`p`);
// var newtt = document.createTextNode(`heeeeeeê`);
// newdd.appendChild(newtt);
// div1.insertBefore(newdd, reNode);
// var removenode = document.querySelectorAll(`p`)[2];
// div1.removeChild(removenode);

 var lb1 = document.querySelector(`.lb1`);
 var chkbox = document.querySelector(`#chkbox`);

lb1.addEventListener(`click`, function (e) {
    console.log(e.target.tagName, 1);
    console.log(this.tagName,1)

  }, false);
  chkbox.addEventListener(`click`, function(e) {
      //e.stopPropagation();
      console.log(e.target.tagName, 2);
      console.log(this.tagName,2)
  },false)


// var myList = document.getElementById(`myList`);


// if(myList.hasChildNodes()) {
//     for(var i = 0; i < myList.childNodes.length; i++) {
//         if(myList.childNodes[i].nodeType ===1) {
//             myList.childNodes[i].addEventListener(`click`, function () {
//                 console.log(this.textContent);
//               })
//         }
//     }
// };

// var newList = document.createElement(`li`);
// var textNode = document.createTextNode(`Hello World !`);
// newList.appendChild(textNode);
// myList.appendChild(newList).addEventListener(`click`,function () {
//     console.log(this.textContent)
//   });
// var myList = document.getElementById(`myList`);

// myList.addEventListener(`click`, function(e) {
//     if(e.target.tagName.toLowerCase() === `li`) {
//         console.log(e.target.textContent);
//     }
// })

// var newList = document.createElement(`li`);
// var textNode = document.createTextNode(`Hello World !`);
// newList.appendChild(textNode);
// myList.appendChild(newList);

// var a = document.querySelector(`.low`);
// var str = `Hellow World`;
// document.write(`<p>${str.toLocaleLowerCase()}</p></p>`)
// function fn() {
//     return "aaa";
// }
// window.addEventListener(`keypress`,function (e) {
//     console.log(e.keyCode)
// })

// document.querySelector(`img`).style.width = `10%`;
// document.querySelector(`img`).style.height = `10%`;

// document.querySelector(`.textBox`).addEventListener(`keydown`,function (e) {
//     if(e.keyCode === 13) {
//         fa ();
//     }
// });
// function fa () {
//     console.log(`you press the enter`)
//   }
// var select1 = document.querySelector(`.select1`);
// select1.addEventListener(`change`, function () {
//     console.log(`你已變更城市`)
// })
// select1.addEventListener(`focus`, function() {
//     select1.style.color = `blue`;
// })
// document.querySelector(`textarea`).addEventListener(`keydown`, function () {
//     document.querySelector(`textarea`).style.fontFamily = `fantasy`;
//     document.querySelector(`textarea`).style.fontWeight = `700px`;
//     document.querySelector(`textarea`).style.fontSize = `14px`;


//     document.querySelector(`textarea`).style.color = `darkred`;

// })
// //Composition Event => set 1. compostion start set 2. compostionend set 3. compostionupdate

// var texta = document.querySelector(`textarea`);

// texta.addEventListener(`compositionstart`, function (ev) {
//     console.log(`compositionstart`);
//     console.log(ev.data);
// });
// texta.addEventListener(`compositionend`, function (ev) {
//     console.log(`compositionend`);
//     console.log(ev.data)
// });
// texta.addEventListener(`compositionupdate`, function (ev) {
//     console.log(`compositionupdate`);
//     console.log(ev.data);
// });
// texta.addEventListener(`input`, function () {
//     console.log(`input`);
//     console.log(this.value);
// })
// // Composition Event End

// //Event constructor

// // var event = new Event (`build`);
// // ele1.addEventListener(`build`, function (e) {

// // });
// // ele1.dispatcheEvent(event);
// // var enent = new CustomEvent(`build`, {'detail': ele1.datase.time});
// // function eventHandler(e) {
// //     log(`the time is: ${e.detail}`)
// // }
// // event constrctor end



// // DOM
// //HTML=>Parser(解析器)=>Content Slink(內容接收器)=>Content Model=>Frame Constructor

// document.querySelector(`.btn-3`).addEventListener(`click`, (e)=>{
//     console.log(e.type);
// });

// var funcA = ()=>{}; // 把函式存入變數中
// var funcB = [ aa=()=>{var a = 10; console.log(a)}] // 函式放入陣列中
// var funC = {method: ()=>{}};// 把函式存入物件中 呼叫時執行 funcC.method(); 或 funC[`method`];
// funcB[0]();
// var aaa;


// var FuncD = function (e) { return e}// 把函式當作參數 傳入到另一個函式中

//   var runFuncPassedToFuncD = FuncD(function(){console.log(`hi`)});// 另一個函式 存放funcD 而參數為一個匿名函式
//   runFuncPassedToFuncD();//呼叫另一個函式

//   //函式是物件 可以有自己的屬性
//   var funcE = function () {};
//   funcE.anwser = `yup`;
//   console.log(funcE.anwser);

//   var plus = function (numa,numb,numc){
      
//       for(var i = 0; i < arguments.length; i++) {
//           //console.log(arguments[i]);
//           console.log(arguments.callee.length)
//           //console.log(arguments.callee.caller.length)

//       }
//       return numa+numb+numc
  
//     };

//   plus(1,2,3,4,5); //沒有傳入值作為參數的情況下 那些沒有指定的參數預設會是undefined
  

// function aaw (a,b,c) {
//     console.log(arguments.callee.caller.length);
// }
// function callmethod (a,a,a,a,a,a,a) {
//     aaw(1,3)
// }
// callmethod();


// var addPerson = function (firstName, lastName, phone, email, gender, birthday, address) {
//     console.log(firstName, lastName, phone, email, gender, birthday, address)
// };

// addPerson(`Ho`,`Lawrence`,`09XX-XXX-XXX`,`xxxx@gamil.com`,`Male`,20200101,`undefined`)

// //使用物件建立

// var people = [{
//     firstName:`Ho`,
//     lastName:`Lawrence`,
//     phone:`09XX-XXX-XXX`,
//     email:`xxxx@gmail.com`,
//     gender:`Male`,
//     address:`undefined`
// },
// {
//     firstName:`Chen`,
//     lastName:`Lucy`,
//     phone:`09XX-XXX-XXX`,
//     email:`xxxx@gmail.com`,
//     gender:`Female`,
//     address:`undefined`
// }]
// addPerson(people);
// for(let i = 0; i < people.length; i++) {
//     console.log(people[i].firstName)
// }

// var plus1 = function (numa, numb) {
//     //numa = numa || 0;
//     //numb = numb || 0; //會被判斷成false的不止undefined 改用嚴謹方法
//     numa = (typeof numa !== `undefined`) ? numa : 0;
//     numb = (typeof numb !== `undefined`) ? numa : 0;

//     console.log(numa + numb);
// };

// plus1(1111);


// //es6 寫法
// var plus2 = function (numa = 0,numb = 0) {
//     console.log(numa+numb)
// };
// plus2(23);

// function qwer(num) {
//     console.log(num)
// }
// qwer(1);

// var o ={value:10};
// function changeValue (obj) {
//     obj = {value:123}
// }
// changeValue(o)
// console.log(o)

var funcA = function (callback) {
    var i = Math.random()+1;
    window.setTimeout(function () {
        console.log(`function A ${i}`);
        if(typeof callback ===`function`) {
            callback(funcC);
        }
    }, 1.3 * 1000);
};

var funcB = function (callback) {
    var i = Math.random()+1;
    window.setTimeout(function () {
        console.log(`function B ${i}`);
        if(typeof callback===`function`) {
            callback(funcD);
        }
    }, 1.2 * 1000);
};
var funcC = function (callback) {
    var i = Math.random()+1;
    window.setTimeout(function () {
        console.log(`function C ${i}`);
        if(typeof callback===`function`) {
            callback(funcE);
        }
    }, 1.1 * 1000);
};
var funcD = function (callback) {
    var i = Math.random()+1;
    window.setTimeout(function () {
        console.log(`function D ${i}`);
        if(typeof callback===`function`) {
            callback();
        }
    }, 1 * 1000);
};
var funcE = function (callback) {
    var i = Math.random()+1;
    window.setTimeout(function () {
        console.log(`function E ${i}`);
        if(typeof callback===`function`) {
            callback();
        }
    }, .9 * 1000);
};



funcA(funcB);


for(var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function () {
            console.log(x)
        },x * 1000)
    })(i)
}
