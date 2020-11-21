package com.mukundmadhav.springboot.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mukundmadhav.springboot.springboot.service.FlightService;
import com.mukundmadhav.springboot.springboot.modal.Flight;

@RestController
@RequestMapping("/api")
public class FlightController {
	
	@Autowired
	private FlightService flightService;
	
	@GetMapping("/flight")
	public List<Flight> get() {
		return flightService.get();
	}
	
	@PostMapping("/flight")
	public Flight save(@RequestBody Flight flight) {
		flightService.save(flight);
		return flight;
	}
	
	@GetMapping("/flight/{id}")
	public Flight get(@PathVariable int id) {
		return flightService.get(id);
	}
	
	@DeleteMapping("/flight/{id}")
	public String delete(@PathVariable int id) {
		
		flightService.delete(id);
		
		return "Flight removed with id "+id;
		
	}
	
	@PutMapping("/flight")
	public Flight update(@RequestBody Flight flight) {
		flightService.save(flight);
		return flight;
	}

} 
