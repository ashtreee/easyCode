    //Хотел чтобы время отображалось в чистом виде, без всяких там "Финляндия +3..." Сделал вот таким способом
     var options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
var timerId = setInterval(function() {
    var date = new Date;
    console.clear();
      console.log (date.toLocaleString("ru", options) );
    }, 1000);