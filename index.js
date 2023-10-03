


function razzle (lawyer = "Billy", target = "'em"){
    console.log (`${lawyer} razzle-dazzles ${target}!`)
}
razzle()
razzle ("Methusaleh", "T'Challah")

function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
console.log (saturdayFun())

function mondayWork(toDo="go to the office"){
    return (`This Monday, I will ${toDo}.`);
}

function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }
  
  demoChain("Dr. Stephen Strange")()();

  function wrapAdjective(name) {
    const first = "special";
    return function (adjective) {
      return `You are ${name}${adjective}${name}!`
      const second = "a hard worker";
      return `You are *${second}*!`;
      const third = "a dedicated programmer";
      return 'You are ||${third}||!'
      
    };
  }
  
  console.log(wrapAdjective("Ashleigh")(third));


