


var Links={
  setColor:function (color){
    var alist=document.querySelectorAll('a')
    var i=0;
    while(i<alist.length){
      alist[i].style.color=color;
      i=i+1;
    }

  }
}



var Body={
  setColor:function(color){
    document.querySelector('body').style.color=color;
  },
  BodySetBackgroundColor:function(color){
    documnet.querySelector('body').style.backgroundColor=color;
  }
}

function BodySetColor(color){
  document.querySelector('body').style.color=color;
}

function BodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor=color;
}



function nightDayHandler(self){

  var target = document.querySelector('body');
  if(self.value === 'night'){
    BodySetBackgroundColor('white');
    BodySetColor('black');
    self.value = 'day';

    LinksSetColor('powderblue');
  } else {
    BodySetBackgroundColor('black');
    BodySetColor('white');
    self.value = 'night';

    LinksSetColor('blue');
    }
  }
