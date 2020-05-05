$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

$(document).on("click", "#btnSave", function(event) 
{  
	$("#alertSuccess").text("");  
	$("#alertSuccess").hide(); 
	$("#alertError").text("");  
	$("#alertError").hide(); 

	 var status = validateHosForm();  
	 if (status != true)  
	 {   
		 $("#alertError").text(status);  
		 $("#alertError").show();   
		 return;  
	 } 

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


$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidHospIDSave").val($(this).closest("tr").find('#hidHospIDUpdate').val());
	$("#hosName").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#hosAddress").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#hosContactno").val($(this).closest("tr").find('td:eq(2)').text());
	$("#hosEmail").val($(this).closest("tr").find('td:eq(3)').text()); 
	
});

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


function validateHosForm()
{   
	if ($("#hosName").val().trim() == "")  
	{   
		return "Insert Hospital Name."; 
	} 
	 
	if ($("#hosAddress").val().trim() == "") 
	{  
		return "Insert Address.";  
	} 
	 
	if ($("#hosContactno").val().trim() == "") 
	{   
		return "Insert Contact No."; 
	} 
	 
	if ($("#hosEmail").val().trim() == "") 
	{   
		 return "Insert Email."; 
	} 
	 
	 return true; 
} 


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





