package part02.main;

import java.util.ArrayList;
import java.util.List;

import part02.controller.MemMultiController;
import part02.dto.MemDTO;

public class MainMulti {

	public static void main(String[] args) {
		MemMultiController mController = new MemMultiController();
//		memList(mController.getAllListExecute());
		
//		List<MemDTO> insertList = new ArrayList<MemDTO>();
//		insertList.add(new MemDTO("이기용", 40, "제주"));
//		insertList.add(new MemDTO("이소라", 33, "광주"));
//		int cnt = mController.setInsertListExecute(insertList);
//		System.out.printf("Insert Count : %d\n", cnt);
		
//		int cnt = mController.setDeleteArrayExecute(new int[] {11});
//		System.out.printf("Delete Count : %d\n", cnt);
//	
//	  memList(mController.getAllListExecute());
		
//	MemDTO dto = new MemDTO();
//	dto.setName("즈");
//	dto.setAge(20);
//		
//	memList(mController.getPartSearchExecute(dto));	
		
	
//		MemDTO dto = new MemDTO();
//		dto.setAge(17);
//		dto.setNum(6);
//		int chk = mController.setUpdateMultiExecute(dto);
//		System.out.printf("Update Count : %d\n", chk);
//		memList(mController.getAllListExecute());

		
//		MemDTO dto = new MemDTO("전다래", 28, null);
		MemDTO dto = new MemDTO("민지", 20, "뉴진스");
		int chk = mController.setInsertDataExecute(dto);
		System.out.printf("Insert Count : %d\n", chk);
		memList(mController.getAllListExecute());
		
		
	
	}//end main
	
	public static void memList(List<MemDTO> aList) {
		for(MemDTO dto : aList)
	System.out.printf("%d %s %d %s\n", dto.getNum(), dto.getName(), dto.getAge(), dto.getLoc());
		
	}//end memList()

}//end class
