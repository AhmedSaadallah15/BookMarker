



var siteName =document.querySelector("#SiteName");
var siteURL =document.querySelector("#SiteURL");
var myBody = document.querySelector("#myBody");
var btn = document.querySelector("#btn");
var list=[];

if(localStorage.getItem('list') !== null){

    list = JSON.parse(localStorage.getItem("list")) ;
    displayList();
}


    btn.addEventListener("click", function () {
        var siteGroup = {
            code : siteName.value,
            url: siteURL.value,
        }
        list.push(siteGroup);
        displayList()
        localStorage.setItem("list",JSON.stringify(list))    
        clearList()
    });






function displayList(){
    var cartona=``;

    for(i=0;i<list.length;i++){
        cartona+=`<tr>
        <td>${i+1}</td>
        <td>${list[i].code}</td>
        <td><a href="${list[i].url}" target="_blank"><button  type="button" class="btn btn-Visit"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
        <td><button onclick="deleteList(${i})" type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>`
        // console.log(list[i].url);
    }
    myBody.innerHTML=cartona
}


function clearList(){
    siteName.value=null;
    siteURL.value=null;
}


function deleteList(index){
list.splice(index,1)
displayList()
localStorage.setItem("list",JSON.stringify(list)) 
}

function validationName(){
    var regex=/^[A-Z][a-zA-Z\s]*$/;
    if(regex.test(siteName.value) === true){
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        return true
    }else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        return false
    }
}
function validationUrl(){
    var regex=/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    if(regex.test(siteURL.value) === true){
        siteURL.classList.add("is-valid")
        siteURL.classList.remove("is-invalid")
        return true
    }else{
        siteURL.classList.add("is-invalid")
        siteURL.classList.remove("is-valid")
        return false
    }
}