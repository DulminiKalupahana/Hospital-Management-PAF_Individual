package model;

import java.io.IOException; 
import java.util.HashMap; 
import java.util.Map; 
import java.util.Scanner; 
import model.Hospital;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HospitalAPI
 */
@WebServlet("/HospitalAPI")
public class HospitalAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	Hospital hosObj = new Hospital();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HospitalAPI() {
        super();
        // TODO Auto-generated constructor stub
        
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		String output = hosObj.insertHosDetails(request.getParameter("hosName"),      
												request.getParameter("hosAddress"),     
												request.getParameter("hosContactno"),       
												request.getParameter("hosEmail")); 
		 
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request); 
		 
		String output = hosObj.updateHosDetails(paras.get("hidHospIDSave").toString(),     
				 								paras.get("hosName").toString().replace('+',' '),     
				 								paras.get("hosAddress").toString().replace("%2C",","),        
				 								paras.get("hosContactno").toString(),        
				 								paras.get("hosEmail").toString().replace("%40","@" )); 
		 
		 response.getWriter().write(output);
	}
	

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
	
		Map paras = getParasMap(request); 
		 
		String output = hosObj.deleteHosDetails(paras.get("hosID").toString()); 
		 
		response.getWriter().write(output);
	}
	
	
	private static Map getParasMap(HttpServletRequest request) 
	{  
		Map<String, String> map = new HashMap<String, String>();  
		try  
		{   
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");   
			String queryString = scanner.hasNext() ?          
					scanner.useDelimiter("\\A").next() : "";   
					scanner.close(); 
	 
					String[] params = queryString.split("&");   
					for (String param : params)   
					{ 
		  
						String[] p = param.split("=");    
						map.put(p[0], p[1]);   
					}  
		}  
		catch (Exception e)  
		{  
			
		}  
		return map; 
		
	}
	
	
	

}
