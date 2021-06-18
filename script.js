var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json');
var requestdata = []
request.onload  = () =>{

 requestdata = JSON.parse(request.response);

 var first = document.createElement('input');  
  first.setAttribute('id','first');
  first.setAttribute('type', 'button');
  first.setAttribute('class', 'btn btn-outline-primary');
  first.setAttribute('value', 'First');
  first.setAttribute('onClick','show(1)');
      document.body.append(first);

  var previous = document.createElement('input');  
  previous.setAttribute('id','previous');
  previous.setAttribute('type', 'button');
  previous.setAttribute('class', 'btn btn-outline-primary');
  previous.setAttribute('value', 'Previous');
  previous.setAttribute('onClick','prev()');
      document.body.append(previous);

  for(var i=2;i<=10;i++){
  var button = document.createElement('input');
      button.setAttribute('id',i);
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'btn btn-outline-primary');
      button.setAttribute('value', i);
      button.setAttribute('onClick','show(id)');
      document.body.append(button);
    }

  var next = document.createElement('input');
  next.setAttribute('id','next');
      next.setAttribute('type', 'button');
      next.setAttribute('class', 'btn btn-outline-primary');
      next.setAttribute('value', 'Next');
      next.setAttribute('onClick','next()');
      document.body.append(next);
    
      var table1= document.createElement('table');
      table1.setAttribute('class', 'table');
     
      var tr1 = document.createElement('tr');
    
      var th1  = document.createElement('td'); 
      th1.setAttribute('class', 'th1');
      var th2  = document.createElement('td');
      th2.setAttribute('class', 'th1');
      var th3  = document.createElement('td');
      th3.setAttribute('class', 'th1');
      th1.innerText = 'ID';
      th2.innerText = 'NAME';
      th3.innerText = 'EMAIL';
      tr1.append(th1,th2,th3);
      table1.append(tr1);
     
      document.body.append(table1); 
     show(1);

 }  
 
request.send();

 var table= document.createElement('table');
 table.setAttribute('class', 'table');
 
     
var gid = 1;
    
function show(id){

     var id  = parseInt(id);
      gid = id;
     
      table.innerHTML=" ";
      
      for(var i=((id-1)*10);i<id*10;i++){
       

        var tr = document.createElement('tr');
        var td1  = document.createElement('td');
        var td2  = document.createElement('td');
        var td3  = document.createElement('td');
        td1.innerText = requestdata[i].id;
        td2.innerText = requestdata[i].name;
        td3.innerText = requestdata[i].email;


  
        tr.append(td1,td2,td3);
        table.append(tr);
       
      }
      
      document.body.append(table);
      
    
  }

  function prev(){
  if(gid>1){
    gid --;
      show(gid);
    }
  }

    function next(){
  if(gid<10){
    gid ++;
      show(gid);
    }
  }

