//selecting the input ,button  elements

var book_name=document.getElementById("book_name");
var issued_to=document.getElementById("issued-to");
var issue_btn=document.getElementById("issue_btn");



//taking date using date function to calculate the book given time

var date=new Date();

//to add row we are creating a event listener using click event

issue_btn.addEventListener("click" , addrow)
 
//it is used to change the id when we press the issue button
var count=0;
var arrofobj=[];

function addrow()
{
    //checking whether the proper inputs are given

    if(book_name.value !== "" && issued_to.value !== "")
    {   count++;
        

        //selecting the table and inserting the rows and columns dynamically when the button clicked
        var table=document.getElementById("lib-table");
        
        
        var row=table.insertRow(-1);


        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");
        var cell5 = document.createElement("td");
        

        //-----Second method


        // var cell1=row.insertCell(0);
        // var cell2=row.insertCell(1);
        // var cell3=row.insertCell(2);
        // var cell4=row.insertCell(3);
        // var cell5=row.insertCell(4);
       
        //assigning the appropriate values to the cells entered by the user
        
        cell1.innerHTML=count;
        cell2.innerHTML=book_name.value;
        cell3.innerHTML=issued_to.value;
        cell4.innerText = date.getDate() + "/" + (date.getMonth() + 1) + "/"  + date.getFullYear()  + " at " + date.getHours() +":" + date.getMinutes() + " " ;
        cell5.innerHTML="Not Returned";
        cell5.style.color='red';



        //--------tried to get time in AM and Pm
        // let hrs=date.getHours;
        // var ampm="";
        // var time_str;
        // var act_hrs;
        // // if(hrs>12)
        // // {
        // //     act_hrs=hrs-12;
        // //     ampm="Pm";
        // //     time_str=act_hrs + ampm;
        // // }
        // // if(hrs<12)
        // // {
        // //     act_hrs=hrs;
        // //     ampm="Am";
        // //     time_str=act_hrs + ampm;
        // // }


       


        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);

        //  storing the information entered by the user in an array where it stores every user info in an object format as given below
        let count2=count-1;
        
        let obj={
            id : cell1.innerHTML,
            Book_name : cell2.innerHTML,
            issued_to : cell3.innerHTML,
            issue_date_time : cell4.innerHTML,
            status1 : cell4.innerHTML
        }
        arrofobj.push(obj);

        // savingOnLocal(arrofobj)
        console.log(arrofobj);
        if(cell5.innerHTML=="Returned")
        {
            cell5.style.color='green';
        }
        var img = document.createElement("img");
        img.src = "tick-mark.jpg";
        img.style.height='30px'
        img.style.width='30px'
        cell5.appendChild(img);



        //image onclick function for edit
        img.addEventListener("click" , ()=>{

        })



    }


    else
    {
        console.log("check input fields");
    }
}

