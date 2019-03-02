document.getElementById('dataBadania').valueAsDate = moment().toDate();
document.getElementById('dataUrodzenia').valueAsDate = moment().subtract(690, 'months').toDate(); //poprawiona data urodzin na 57i5

function zmianaUr(){
  document.getElementById('dataUrodzenia').valueAsDate = moment.utc(document.getElementById('dataUrodzenia-txt').value).toDate();
}

function czyscUr(){
  document.getElementById('dataUrodzenia-txt').value="";
}

function zmianaBa(){
document.getElementById('dataBadania').valueAsDate = moment.utc(document.getElementById('dataBadania-txt').value).toDate();
}

function czyscBa(){
  document.getElementById('dataBadania-txt').value="";
}

function dodaj(a, b) {
  var t=moment(a);
  return   t.add(b, 'months');
}

function liczOrzeczenie()
{
  const dataUr = moment(document.getElementById('dataUrodzenia').value);
  const dataBa = moment(document.getElementById('dataBadania').value);
  var dataOrz;
  var data57i5 = dodaj(dataUr, 690); //ma być 57.5 czyli 690 miesięcy

  if (data57i5>=dataBa){
    dataOrz = dodaj(dataBa, 60);
    }

  else if  ((data57i5<dataBa) && (dodaj(dataUr, 720)>=dataBa)){
    dataOrz = dodaj(dataUr, 750);
    }

  else {
    dataOrz = dodaj(dataBa, 30)
    }

document.getElementById("dataDo").innerHTML = dataOrz.format('DD.MM.YYYY');

}
