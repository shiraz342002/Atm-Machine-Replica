
           
        document.getElementById("exitbutton").addEventListener("click", function() {
            location.reload();
      
                });
                function back() {
                    var exp = document.getElementById('accno').value;
                    exp = exp.substring(0, exp.length - 1);
                    document.getElementById('accno').value = exp;
                }
                
        function menu(){
            document.getElementById("toptext").style.display="inline";
            document.getElementById("accno").style.display="inline";
            document.getElementById("accbtn").style.display="inline";
            document.getElementById("insert_btn").style.display="none";
    
        }
        var temp_accno_holder=parseInt(document.getElementById("accno").valu);
        function AccCheck(){
            var acc_no = parseInt(document.getElementById("accno").value);
         //   var pass=parseInt(document.getElementById("pass").value);
            temp_accno_holder=acc_no;
            var inputElement = document.getElementById('accno');
    
            console.log("Temporary Acc holder : "+temp_accno_holder);
            var xmlhtml= new XMLHttpRequest();
            xmlhtml.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200){
                    var response=this.responseText;
                    if(response=="1"){
                        document.getElementById("toptext").innerHTML="Invalid Account Number Try Again";
                        document.getElementById("toptext").style.color="red"
                        document.getElementById("toptext").style.fontSize="26px";
                        
                    }
                    else{
    
                        document.getElementById("toptext").innerHTML=this.responseText;
                        document.getElementById("toptext").style.color="black";
                        document.getElementById("accbtn").style.display="none";
                        document.getElementById("passbtn").style.display="inline";
                        inputElement.focus();
                        inputElement.value='';
                    }
    
                }
            }
            xmlhtml.open("GET", "Check_id.php?acc_no=" + acc_no, true);
            xmlhtml.send();
            
        }
        function PassCheck(){
            var pass=parseInt(document.getElementById("accno").value);
            var acc_no=temp_accno_holder;
            console.log("The pass is: "+pass);
            console.log("The accno is :"+acc_no);
            
            var xmlhtml= new XMLHttpRequest();
            xmlhtml.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200){
                    var response=this.responseText;
                    if(response=="1"){
                        document.getElementById("toptext").innerHTML="Invalid Pin Try Again";
                        document.getElementById("toptext").style.color="red"
                    }
                    else{
                        document.getElementById("toptext").innerHTML=this.responseText;
                        document.getElementById("toptext").style.color="black"
                        document.getElementById("toptext").style.fontSize="40px";
                        document.getElementById("passbtn").style.display="none";
                        document.getElementById('accno').style.display='none';
                        //document.getElementById("pass").style.display="none";
                        document.getElementsByClassName("menu")[0].style.display="flex";
    
                    }
                }
            }
            xmlhtml.open("GET", "Check_pass.php?pass="+pass+"&acc_no="+acc_no,true);
            xmlhtml.send();
        }
        function CheckBalance(){
            acc_no=temp_accno_holder;
            //var acc_no = parseInt(document.getElementById("accno").value);
            var xmlhtml= new XMLHttpRequest();
            xmlhtml.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200){
                    document.getElementById("toptext").innerHTML=this.responseText;
                    document.getElementById("toptext").style.fontSize="35px";
    
                }
            }
                xmlhtml.open("GET", "Check_Balance.php?acc_no=" + acc_no + true);
                xmlhtml.send();
        }
        function Withdraw_menu(){
            var inputElement = document.getElementById('accno');
            document.getElementsByClassName("menu")[0].style.display="none";
            document.getElementById("toptext").innerHTML="Enter Amount";
            inputElement.value='';
            document.getElementById("accno").style.display="inline";
            document.getElementById("withdraw_btn").style.display="inline";
        }
        function Withdraw_Cash(){
            var acc_no = temp_accno_holder;
            var amount=parseInt(document.getElementById("accno").value);    
            var xmlhtml= new XMLHttpRequest();
            xmlhtml.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200){
                    var response=this.responseText;
                        document.getElementById("toptext").innerHTML=response;
                       // Withdraw_menu();
                    }
                    else{
    
                        document.getElementById("toptext").innerHTML=this.responseText;
                        document.getElementById("toptext").style.fontSize="30px"
                        document.getElementById("accno").style.display="none";
                        document.getElementById("withdraw_btn").style.display="none";
                        document.getElementsByClassName("menu")[0].style.display="inline";
                        
                    }
                }
                
                xmlhtml.open("GET", "Withdraw.php?acc_no=" + acc_no+ "&amount="+amount, true);
                xmlhtml.send();
            }
            function Credit_menu(){
                var inputElement = document.getElementById('accno');
                inputElement.value='';
                document.getElementsByClassName("menu")[0].style.display="none";
                document.getElementById("toptext").innerHTML="Enter Amount";
                document.getElementById("accno").style.display="inline";
                document.getElementById("credit_btn").style.display="inline";
    
            }
            function Credit_Cash(){
                var acc_no = temp_accno_holder;
            var amount=parseInt(document.getElementById("accno").value);    
                var xmlhtml= new XMLHttpRequest();
                xmlhtml.onreadystatechange=function(){
                    if(this.readyState==4 && this.status==200){
                        var response=this.responseText;
                            document.getElementById("toptext").innerHTML=response;
                           document.getElementById("credit_btn").style.display="none";
                        }
                        else{
        
                            document.getElementById("toptext").innerHTML=this.responseText;
                            document.getElementById("toptext").style.fontSize="30px"
                            document.getElementById("accno").style.display="none";
                            document.getElementById("withdraw_btn").style.display="none";
                            document.getElementsByClassName("menu")[0].style.display="inline";
                            
                        }
                    }
                    
                    xmlhtml.open("GET", "Credit.php?acc_no=" + acc_no+ "&amount="+amount, true);
                    xmlhtml.send();
            }
            function Transfer_menu(){
                var inputElement = document.getElementById('accno');
                inputElement.value='';
                document.getElementsByClassName("menu")[0].style.display="none";
                document.getElementById("accno").style.display="inline";
                document.getElementById("transfer_btn").style.display="inline";
                document.getElementById("toptext").innerHTML="Transfer Funds";
                document.getElementById("amount").style.display="inline";
                document.getElementById("accno").setAttribute("placeholder","Acc no 44");


            }
            function transfer_cash(){
                var sender_accno=temp_accno_holder;
                var rec_accno=parseInt(document.getElementById("accno").value);
                var amount=document.getElementById("amount").value;
                var xmlhtml= new XMLHttpRequest();
                xmlhtml.onreadystatechange=function(){
                    if(this.readyState==4 && this.status==200){
                        var response=this.responseText;
                           document.getElementById("toptext").innerHTML=response;
                        }
                        else{
        
                            document.getElementById("toptext").innerHTML=this.responseText;
                            document.getElementById("toptext").style.fontSize="30px"
                            document.getElementById("accno").style.display="none";
                            document.getElementById("transfer_btn").style.display="none";
                            document.getElementById("amount").style.display="none";
                            document.getElementsByClassName("menu")[0].style.display="inline";
                            
                            
                        }
                    }
                    
                    console.log("Sender ACC"+sender_accno);
                    console.log("Reciver Acc"+rec_accno);
                    console.log("The amount is"+amount);
                    xmlhtml.open("GET", "Transfer.php?sender_accno=" + sender_accno + "&amount=" + amount + "&rec_accno=" + rec_accno, true);

                    xmlhtml.send();
            }
            
        