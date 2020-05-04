$(document).ready(function()
{  
	if ($("#alertSuccess").text().trim() == "") 
	{   
		$("#alertSuccess").hide();  
	}  
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
	 
	 $("#formHospital").submit();
}); 


$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidHospIDSave").val($(this).closest("tr").find('#hidHospIDUpdate').val());
	$("#hosName").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#hosAddress").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#hosContactno").val($(this).closest("tr").find('td:eq(2)').text());
	$("#hosEmail").val($(this).closest("tr").find('td:eq(3)').text()); 
	
}); 


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
	 
	/* var tmpCN = $("#hosContactno").val().trim(); 
	 if (!$.isNumeric(tmpCN))  
	 {  
		 return "Insert a numerical value for Contact No.";  
	 } 
	 
	  $("#hosContactno").val(parseFloat(tmpCN).toFixed(2)); */
	 
	 if ($("#hosEmail").val().trim() == "") 
	 {   
		 return "Insert Email."; 
	 } 
	 
	 return true; 
} 