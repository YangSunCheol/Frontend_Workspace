package part01.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import part01.dto.EmpDTO;


public class EmployeesDAO {
	
	/*
	 * 
	 * apache.org => iBatis => jdk1.4 이상
	 * google.com => myBatis => jdk1.5 이상
	 * 
	 */

	public int countMethod(SqlSession sqlSession) {
														//namespace.id
		return sqlSession.selectOne("emp.cnt");
	}
	
	public List<EmpDTO> getAllListMethod(SqlSession sqlSession){
		return sqlSession.selectList("emp.list");
		
	}
	
	public List<EmpDTO> getSearchListMethod(SqlSession sqlSession, String data){
		return sqlSession.selectList("emp.searchList", data);
	}
	
	
}





