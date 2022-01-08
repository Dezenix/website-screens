const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')

const dailyTimes = document.querySelectorAll('.daily-time')
const weeklyTimes = document.querySelectorAll('.weekly-time')
const monthlyTimes = document.querySelectorAll('.monthly-time')


const btnsLogic = function(active,secondaryA,secondaryB){
    active.classList.add('hard');
    secondaryA.classList.add('lighten');
    secondaryB.classList.add('lighten');
    secondaryA.classList.remove('hard');
    secondaryB.classList.remove('hard');
}

const hrLogic = function(Xs,Ys,Zs){
    for (const x of Xs) {
        x.classList.remove('hide');
    }
    for (const y of Ys) {
        y.classList.add('hide');
    }
    for (const z of Zs) {
        z.classList.add('hide');
    }
}

daily.addEventListener('click',function(){
    btnsLogic(daily,weekly,monthly);
    hrLogic(dailyTimes,weeklyTimes,monthlyTimes)
});
weekly.addEventListener('click',function() {
    btnsLogic(weekly,monthly,daily)
    hrLogic(weeklyTimes,monthlyTimes,dailyTimes)
});
monthly.addEventListener('click',function() {
    btnsLogic(monthly,daily,weekly)
    hrLogic(monthlyTimes,dailyTimes,weeklyTimes)
});

