var empDetails=[]
function submitBtn(){
    var fname= document.getElementById('fname').value
    var lname= document.getElementById('lname').value
    var salary= document.getElementById('sal').value
   
    var empObj={}
    empObj.fname= fname
    empObj.lname= lname
    empObj.salary= salary
    empDetails.push(empObj)
    
    console.log(empDetails)

    //validation
    if(lname=='' || fname == ''){
        document.querySelector('.errorDisplay').textContent='Enter first Name'
        document.querySelector('.errorDisplay1').textContent='Enter last Name'
    }else{
        display()
    }
}
function display(){
    var tableBody=document.getElementById('empData')
    empDetails.forEach(function(ele, ind){
        var tr= document.createElement('tr')
        var tdFname= document.createElement('td')
        tdFname.innerText=ele.fname;

        var tdLname= document.createElement('td')
        tdLname.innerText=ele.lname;

        var tdSal= document.createElement('td')
        tdSal.innerText=ele.salary;
        
        //add delete button to remove emp details
        var tdDelBtn= document.createElement('td')
        var delBtn= document.createElement("button")
        delBtn.innerText='delete'
        delBtn.addEventListener('click', function(){
            tr. remove()
        })
        tdDelBtn.innerText=delBtn 
        
        tr.appendChild(tdFname)
        tr.appendChild(tdLname)
        tr.appendChild(tdSal)
        tr.appendChild(delBtn)
        tableBody.appendChild(tr)

    })
    empObj={}
    empDetails=[]
    
}
console.log(document.children)