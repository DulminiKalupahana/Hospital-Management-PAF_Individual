<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="model.Hospital" %>
    
        
<% 
	if (request.getParameter("hosName") != null)  
	{  
		Hospital hospitalObj = new Hospital();
		String stsMsg = ""; 
	
		if(request.getParameter("hidHospIDSave") == "")
		{
		 	 stsMsg = hospitalObj.insertHosDetails(request.getParameter("hosName"),     
										request.getParameter("hosAddress"),     
										request.getParameter("hosContactno"),        
										request.getParameter("hosEmail"));
		}
		else
		{
			stsMsg = hospitalObj.updateHosDetails(request.getParameter("hidHospIDSave"),
					request.getParameter("hosName"), 
					request.getParameter("hosAddress"),     
					request.getParameter("hosContactno"),        
					request.getParameter("hosEmail"));
		}
		session.setAttribute("statusMsg", stsMsg);
	}

	if (request.getParameter("hidHospIDDelete") != null)
	{
		Hospital hosObj = new Hospital();
		String stsMsg = hosObj.deleteHosDetails(request.getParameter("hidHospIDDelete"));
		session.setAttribute("statusMsg", stsMsg);
	} 
%>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css"> 
<script src="Components/jquery-3.4.1.min.js"></script> 
<script src="Components/hospital.js"></script>
</head>
<body>

<h1>Hospital Management</h1>  
	<form id="formHospital" name="formHospital" method="post" action="hospitals.jsp" > 
	  
		Hospital Name: <input id="hosName" name="hosName" type="text" class="form-control form-control-sm"><br>   
		Address: <input id="hosAddress" name="hosAddress" type="text" class="form-control form-control-sm"><br>   
		Contact No: <input id="hosContactno" name="hosContactno" type="text" class="form-control form-control-sm"><br>   
		Email: <input id="hosEmail" name="hosEmail" type="text" class="form-control form-control-sm"><br>
		
		  
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
 		<input type="hidden" id="hidHospIDSave" name="hidHospIDSave" value="">
	</form>  
	<div class="alert alert-success">
		<% out.print(session.getAttribute("statusMsg")); %>
	</div>
	<div id ="alertError" class="alert alert-danger"></div>
	<br>

	<%
		Hospital hosObj = new Hospital();
		out.print(hosObj.readHosDetails());
	%>

</body>
</html>