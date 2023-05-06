$(document).ready(function(){
    
    function validateName(){
        let name = $('#CareersName').val();
        if(name.length == 0){
            $('#NameError').html("Name Required");
            return false;
        }
        else{
            $('#NameError').html(" ");
        }
    }

    function validateEmail(){
        let regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z\.]{3,10})$/;
        let email = $('#CareersEmail').val();
        if(email.length == 0){
            $('#EmailError').html("Email is Required");
            return false;
        }else if(!regex.test(email)){
            $('#EmailError').html("Invalid Email");
        }
        else{
            $('#EmailError').html(" ");
        }
    }

    function validateRole(){
        let role = $('#CareersRole').val();
        if(role.length == 0){
            $('#RoleError').html("Role is Required");
            return false;
        }
        else{
            $('#RoleError').html(" ");
        }
    }

    $('#CareersName').keyup(function(){
        validateName()
    })

    $('#CareersEmail').keyup(function(){
        validateEmail()
    })

    $('#CareersRole').keyup(function(){
        validateRole()
    })

    $("#SubmitCareersForm").click(function(){
        let fname = $("#CareersName").val();
        let femail = $("#CareersEmail").val();
        let frole = $("#CareersRole").val();
        if(fname.length == 0 || femail.length == 0 || frole.length == 0){
            validateName();
            validateEmail();
            validateRole();
            $("#OnSubmit").html("Please fill all the required details")
            return false;
        }else{
            alert("Form Submitted")
        }
    })

    $("#CareersName").keyup, $("#CareersEmail").keyup, $("#CareersRole").keyup(function(){
        let name = $("#CareersName").val();
        let email = $("#CareersEmail").val();
        let role = $("#CareersRole").val();

        if(name.length > 0 && email.length > 0 && role.length > 0){

            $("#OnSubmit").html(" ");
         }
    })

    $("#BrowseFiles").click(function(){
        $("#GetFile").click()
      })
      
      $("#GetFile").change(function(){
        $("#FileUpload").val(this.files[0].name);
      });
      

    $("#MaleGender").change(function(){
        alert("Hi Sir")
    })
    $("#FemaleGender").change(function(){
        alert("Hi Lady")
    })

    function validateContactName(){
        let name = $('#ContactName').val();
        if(name.length == 0){
            $('#NameError').html("Name Required");
            return false;
        }
        else{
            $('#NameError').html(" ");
        }
    }

    function validateContactEmail(){

        let regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z\.]{3,10})$/;
        let email = $('#ContactEmail').val();
        if(email.length == 0){
            $('#EmailError').html("Email is Required");
            return false;
        }else if(!regex.test(email)){
            $('#EmailError').html("Invalid Email");
        }
        else{
            $('#EmailError').html(" ");
        }
    }

    function validateContactOrg(){
        let role = $('#ContactOrg').val();
        if(role.length == 0){
            $('#RoleError').html("Role is Required");
            return false;
        }
        else{
            $('#RoleError').html(" ");
        }
    }

    $('#ContactName').keyup(function(){
        validateContactName()
    })

    $('#ContactEmail').keyup(function(){
        validateContactEmail()
    })

    $('#ContactOrg').keyup(function(){
        validateContactOrg()
    })

    $("#SubmitForm").click(function(){
        let name = $("#ContactName").val();
        let email = $("#ContactEmail").val();
        let role = $("#ContactOrg").val();
        if(name.length == 0 || email.length == 0 || role.length == 0){
            validateContactName();
            validateContactEmail();
            validateContactOrg();
            $("#OnSubmit").html("Please fill all the required details")
            return false;
        }else{
            alert("Form Submitted")
        }
    })

    $("#ContactName").keyup, $("#ContactEmail").keyup, $("#ContactOrg").keyup(function(){
        let name = $("#ContactName").val();
        let email = $("#ContactEmail").val();
        let role = $("#ContactOrg").val();

        if(name.length > 0 && email.length >0 && role.length > 0){

            $("#OnSubmit").html(" ");
         }
    })

    $("#ClearForm").click(function(){
        $("#ContactForm")[0].reset();
        $("#NameError").html(" ");
        $("#EmailError").html(" ");
        $("#RoleError").html(" ");
        $("#OnSubmit").html(" ");
    })


    $("#StateProvince").change(function(){

        var promo = $("#StateProvince option:selected").val();
        $("#PromoCode").val(promo + "-PROMO");
    })
    
})