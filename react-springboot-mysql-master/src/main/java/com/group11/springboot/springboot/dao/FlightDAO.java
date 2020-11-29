package com.group11.springboot.springboot.dao;

import java.util.List;

import com.group11.springboot.springboot.modal.Flight;

public interface FlightDAO {
	
	List<Flight> get();
	
	Flight get(int id);
	
	void save(Flight flight);
	
	void delete(int id);
	

}
