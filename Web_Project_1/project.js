        var myphoto=document.getElementById("myimg");
        var submt=document.getElementById("submit");
    		var alphpa=document.getElementById("alpha");
        var number=document.getElementById("numbers");
         var error=document.getElementById("error");
    		var ar=[1,2,3,4,5,6,7];
    		var alphpet=
    		["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
              //var i=0;
         
                var picture=document.getElementById("pict");
                var listspan=document.getElementsByTagName("span");
                
         function Object_Letter(Event_Target,Event_Type,Event_Time)
         {
          this.Event_Target=Event_Target;
          this.Event_Type=Event_Type;
          this.Event_Time=Event_Time;
          
         }
         
                
        function rand()
        {
          var n=Math.floor(Math.random()*26);
          return n;
    
        }
         
      window.addEventListener("load",function(e){
       
                 var p1=new Object_Letter();
                 //p1.Event_Target=submt.value;
                 p1.Event_Time=new Date();
                 p1.Event_Type=e.type;
                 var con=p1.Event_Time+"++"+p1.Event_Type;
                 //localStorage.setItem('submit',con);
                 if(localStorage.getItem("TheLoading")===null)
                 {
                   localStorage.setItem("TheLoading",con);
                 }
                 else
                 {
                
                   var a= new Array(localStorage.getItem("TheLoading"));
                   a.push(con);
                   localStorage.setItem("TheLoading",a);
                 }
       
       });
      
      
            window.addEventListener("unload",function(e){
       
                 var p1=new Object_Letter();
                 //p1.Event_Target=submt.value;
                 p1.Event_Time=new Date();
                 p1.Event_Type=e.type;
                 var con=p1.Event_Time+"++"+p1.Event_Type;
                 //localStorage.setItem('submit',con);
                 if(localStorage.getItem("The UnLoading")===null)
                 {
                   localStorage.setItem("The UnLoading",con);
                 }
                 else
                 {
                
                   var a= new Array(localStorage.getItem("The UnLoading"));
                   a.push(con);
                   localStorage.setItem("The UnLoading",a);
                 }
       
       });
         //
       submt.addEventListener("click",function(e){
                              
                                        //chek the entry number is valid or no.
                   var nnn=number.value;
                   

                   if(nnn=="0"||nnn<0)
                   {
                    error.innerHTML="";
                    error.innerHTML="the number is not valid.";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                   }
                   
                   if(nnn>26)
                   {
                    error.innerHTML="";
                    error.innerHTML="the number is out of range, the range : from 1 to 26 .";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                   }
                   
                   if(nnn!==0 && nnn>0 && nnn<27)
                   { 
                    error.innerHTML="";
                    alpha.innerHTML="";
                    var p1=new Object_Letter();
                    p1.Event_Target=submt.value;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+"++"+p1.Event_Time+"++"+p1.Event_Type;
                    //localStorage.setItem('submit',con);
                    if(localStorage.getItem("submit")===null)
                    {
                      localStorage.setItem("submit",con);
                    }
                    else
                    {
                   
                      var a= new Array(localStorage.getItem("submit"));
                      a.push(con);
                      localStorage.setItem("submit",a);
                    }
                    GenerateArray_RoundNumbers(nnn);
                   }
                              
                              
                              });
           
          //////////////////////
          function GenerateArray_RoundNumbers(randnum)
          {
                   var arr= [];
                for(var i1=0;i1<randnum;i1++)
                  {
                     var NR=rand();
                     var old=NR;
                     arr[i1]=old;
                  }
                    // I'll try avoid the repetition in numbers.
                    for(var arrnum=0;arrnum<arr.length;arrnum++)
                    {
                      
                      
                      var arrnum2next=1;
                      for(;arrnum2next<arr.length;arrnum2next++)
                      {
                        
                        while(arr[arrnum2next]==arr[arrnum] && arrnum!=arrnum2next )
                        {
                             arr[arrnum2next]=rand(); 
                        }

                      }
                      arrnum2next+=1;
                      
                    }
                    
              Create_SpansLetters(arr);
              
          }

        function Create_SpansLetters(arr)
        {
                   alpha.innerHTML="";
                    
                for(var i=0;i<arr.length;i++)
                {
                  var paragrap=document.createElement("span");
                  var text=document.createTextNode(alphpet[arr[i]]);
                  paragrap.appendChild(text);
                  alphpa.appendChild(paragrap);
                  
                }
          
               ShowPict_ByClickInSpan();
          
        }
             
             function ShowPict_ByClickInSpan()
             {
               
                 for(var j=0;j<listspan.length;j++)
                  {
                  listspan[j].addEventListener("click",function(e)
                     {
                      var inp="Project_Images"+"/"+e.target.textContent+'.'+'jpg';
                      
                    var p1=new Object_Letter();
                    p1.Event_Target=e.target.textContent;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+"++"+p1.Event_Time+"++"+p1.Event_Type;
                    // localStorage.setItem('LeterClick',con);
                    if(localStorage.getItem("span_Letter")===null)
                    {
                      localStorage.setItem("span_Letter",con);
                    }
                    else
                    {
                   
                      var a= new Array(localStorage.getItem("span_Letter"));
                      a.push(con);
                      localStorage.setItem("span_Letter",a);
                    }
                      
                      
                       displayPhoto(inp);
                     });
                   }
              
             }
             
             
              function displayPhoto(source)
              {
              
              //picture.innerHTML+="<img src="+sr+" width='150px' height='150px'>";
                myphoto.src=source;
                 //alert(sr);

              }
              
              setInterval(function(){localStorage.clear();},5000);