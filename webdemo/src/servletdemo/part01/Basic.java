package servletdemo.part01;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * HttpServlet을 못 찾는 경우
 * 프로젝트 단축메뉴 > Properties > Targetes Runtimes > Apache Tomcat 9.0 체크 > Apply and close 
 */

//http://localhost:8090/webdemo/basic01

@WebServlet("/basic01")
public class Basic extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=UTF-8");
		
		PrintWriter out = resp.getWriter();
		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("<head><title>home page</title></head>");
		out.write("<body>");
		out.write("<p> servlet page </p>");
		out.write("<p> 홈페이지 </p>");
		out.write("</body>");
		out.write("</html>");
		
	}//end doGet()

}//end class












