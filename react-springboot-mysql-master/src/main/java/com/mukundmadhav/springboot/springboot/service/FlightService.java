package com.mukundmadhav.springboot.springboot.service;

import java.util.List;

import com.mukundmadhav.springboot.springboot.modal.Flight;

public interface FlightService {
	

	List<Flight> get();
	
	Flight get(int id);
	
	void save(Flight flight);
	
	void delete(int id);
	

}
