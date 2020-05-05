$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//SAVE
$(document).on("click", "#btnSave", function(event) 
{  
	//CLEAR ALERT
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide(); 
	$("#alertError").text("");  
	$("#alertError").hide(); 

	//FORM VALIDATION
	 var status = validateHosForm();  
	 if (status != true)  
	 {   
		 $("#alertError").text(status);  
		 $("#alertError").show();   
		 return;  
	 } 

	 //IF VALID
	 var type = ($("#hidHospIDSave").val() == "") ? "POST" : "PUT"; 

	 $.ajax( 
	 {  
	 	url : "HospitalAPI",  
	 	type : type,  
	 	data : $("#formHospital").serialize(),  
	 	dataType : "text",  
	 	complete : function(response, status)  
	 	{   
	 		onHospSaveComplete(response.responseText, status);  
	 	} 
	 }); 

}); 


function onHospSaveComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 

			$("#divHospGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   } 

	} else if (status == "error")  
	{   
		$("#alertError").text("Error while saving.");   
		$("#alertError").show();  
	} else  
	{   
		$("#alertError").text("Unknown error while saving..");   
		$("#alertError").show();  
	} 

	$("#hidHospIDSave").val("");  
	$("#formHospital")[0].reset(); 
}



//UPDATE
$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidHospIDSave").val($(this).closest("tr").find('#hidHospIDUpdate').val());
	$("#hosName").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#hosAddress").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#hosContactno").val($(this).closest("tr").find('td:eq(2)').text());
	$("#hosEmail").val($(this).closest("tr").find('td:eq(3)').text()); 
	
});

//REMOVE
$(document).on("click", ".btnRemove", function(event) 
		{  
			$.ajax(  
					{   
						url : "HospitalAPI",   
						type : "DELETE",   
						data : "hosID=" + $(this).data("hosid"),   
						dataType : "text",   
						complete : function(response, status)   
						{    
							onHospDeleteComplete(response.responseText, status);   
						}  
		}); 
});

	function onHospDeleteComplete(response, status) 
		{  
			if (status == "success")  
			{   
				var resultSet = JSON.parse(response); 


				if (resultSet.status.trim() == "success")   
				{    
					$("#alertSuccess").text("Successfully deleted.");    
					$("#alertSuccess").show(); 

		 
					$("#divHospGrid").html(resultSet.data);   
				} else if (resultSet.status.trim() == "error")   
				{    
					$("#alertError").text(resultSet.data);    
					$("#alertError").show();   
				} 

				} else if (status == "error")  
				{   
					$("#alertError").text("Error while deleting.");   
					$("#alertError").show();  
				} else  
				{   
					$("#alertError").text("Unknown error while deleting..");   
					$("#alertError").show();  
				}
		}


//CLIENTMODEL
function validateHosForm()
{   
	//Hospital Name
	if ($("#hosName").val().trim() == "")  
	{   
		return "Insert Hospital Name."; 
	} 
	
	//Hospital Address
	if ($("#hosAddress").val().trim() == "") 
	{  
		return "Insert Address.";  
	} 
	 
	//Hospital Contact No
	if ($("#hosContactno").val().trim() == "") 
	{   
		 return "Insert Contact No."; 
	} 
	
	//Checking if a valid mobile
	var tmpPhone = $("#hosContactno").val().trim();
	if (!$.isNumeric(tmpPhone)) 
	 {
	 return "Insert numeric value for Contact No.";
	 }
	 
	//Hospital Email
	if ($("#hosEmail").val().trim() == "") 
	{   
		 return "Insert Email."; 
	} 
	
	//Checking if a valid email
	var tmpEmail = $("#hosEmail").val().trim();
	var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,4}/igm;
	if (! re.test(tmpEmail)){
		return "Insert a Valid Email";
	}
	 
	 return true; 
} 








