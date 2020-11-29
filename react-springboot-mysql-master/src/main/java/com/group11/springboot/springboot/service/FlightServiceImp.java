package com.group11.springboot.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.group11.springboot.springboot.dao.FlightDAO;
import com.group11.springboot.springboot.modal.Flight;

@Service
public class FlightServiceImp implements FlightService {
	
	@Autowired
	private FlightDAO flightDao;

	@Transactional
	@Override
	public List<Flight> get() {
		return flightDao.get();
	}

	@Transactional
	@Override
	public Flight get(int id) {
		return flightDao.get(id);
	}

	@Transactional
	@Override
	public void save(Flight flight) {
		flightDao.save(flight);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		flightDao.delete(id);
		
	}

}
