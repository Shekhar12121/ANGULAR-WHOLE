package demo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Demo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String name = request.getParameter("name");
		java.sql.Connection con = null;

		try {
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "");
			PreparedStatement pstmt = con.prepareStatement("select name from user where name=?");
			pstmt.setString(1, name);
			ResultSet rs = pstmt.executeQuery();
			
			if (!rs.next()) {
							out.print(0);
			} else {
							out.print(1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
