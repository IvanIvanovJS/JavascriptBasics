// Напишете програма, която изчислява колко часа ще са необходими на един архитект, 
// за да изготви проектите на няколко строителни обекта. 
// Изготвянето на един проект отнема три часа.
// 1.	Името на архитекта - текст
// 2.	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
function projectsCreation (arg1, arg2){
    let name = arg1;
    let projectsCount = Number(arg2);
    let workTime = Number (3);
    console.log(`The architect ${name} will need ${projectsCount * workTime} hours to complete ${projectsCount} project/s.`)
}
projectsCreation("Ivan", "5")