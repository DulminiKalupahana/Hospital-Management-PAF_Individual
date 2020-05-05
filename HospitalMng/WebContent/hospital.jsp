<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="model.Hospital" %>
    
        
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css"> 
<script src="Components/jquery-3.4.1.min.js"></script> 
<script src="Components/hospitals.js"></script>
</head>
<body>
<div class="container">
	<div class="row"> 
		<div class="col-6">

<h1>Hospital Details</h1>  
	<form id="formHospital" name="formHospital" > 
	  
		Hospital Name:<input id="hosName" name="hosName" type="text" class="form-control form-control-sm"><br>   
		Address: <input id="hosAddress" name="hosAddress" type="text" class="form-control form-control-sm"><br>   
		Contact No:<input id="hosContactno" name="hosContactno" type="text" class="form-control form-control-sm"><br>   
		Email:<input id="hosEmail" name="hosEmail" type="text" class="form-control form-control-sm"><br>
		
		  
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
 		<input type="hidden" id="hidHospIDSave" name="hidHospIDSave" value="">
	</form>  
	
		
			<div id="alertSuccess"  class="alert alert-success">
			</div>
			<div id ="alertError" class="alert alert-danger"></div>
	
		<br>

			<div id="divHospGrid">
			<%
				Hospital hosObj = new Hospital();
				out.print(hosObj.readHosDetails());
			%>
			</div>
		</div>
	</div>
</div>

</body>
</html>