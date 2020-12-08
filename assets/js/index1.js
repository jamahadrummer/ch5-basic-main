(function(CrComLib){
  var btn1=document.querySelector('#ex1-btn1');
  var btn2=document.querySelector('#ex1-btn2');

  btn1.addEventListener('click',btn1Click);
  btn2.addEventListener('click',btn2Click);

  function btn1Click(){
      CrComLib.publishEvent('b','ex1_b',true);
      CrComLib.publishEvent('n','ex1_n',3);
      CrComLib.publishEvent('s','ex1_s','New York');
      
      
  }

  function btn2Click(){
      CrComLib.publishEvent('b','ex1_b',false);
      CrComLib.publishEvent('n','ex1_n',11);
      CrComLib.publishEvent('s','ex1_s','London');
      
      
  }
})(CrComLib);
