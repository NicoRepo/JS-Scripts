moment = require('moment')

async function meses_faltantes(){
  //Some random dates input(Axios, raw string, etc)
  var dates = ['2020-01','2020-02', '2020-04', '2020-08','2020-09', '2021-04', '2021-06', '2022-05']

  var final_dates = new Array();
  var temp_date = moment();
  var temp_date2 = moment();
  dates.forEach(date =>{
    temp_date = moment(date);
      //Si la diferencia entre una fecha y otra es mas de 1 mes
      if(Math.sign(temp_date.diff(temp_date2, 'months')) == 1 && temp_date.diff(temp_date2, 'months') > 1){
        var diff = temp_date.diff(temp_date2, 'months') //Number of months between 2 dates
        for(var n=1; n<diff; n++){
        final_dates.push(nextMonth(temp_date2,(temp_date2.month()+n)).format('YYYY-MM'))//Moment.js calculates years, just add months
        //SOME CODE FOR MISSING MONTHS
      }

    }
    temp_date2 = moment(date);
    final_dates.push(temp_date2.format('YYYY-MM'))
  })
  console.log(final_dates)

  //Calcular el mes siguiente [Date()/Moment.js, <mes0/11>] 
  function nextMonth(date, month) {
    var input = moment(date);
    var output = input.clone().startOf('month').month(month);
    return output > input ? output : output.add(1, 'years');
  }

}