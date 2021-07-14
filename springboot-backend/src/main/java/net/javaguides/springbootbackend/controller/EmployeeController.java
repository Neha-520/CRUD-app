package net.javaguides.springbootbackend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

import net.javaguides.springbootbackend.model.Employee;
import net.javaguides.springbootbackend.repository.EmployeeRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employees
	@GetMapping("/employees")
	public List<Employee>getAllEmployees(){
		return employeeRepository.findAll();
	} 
}
