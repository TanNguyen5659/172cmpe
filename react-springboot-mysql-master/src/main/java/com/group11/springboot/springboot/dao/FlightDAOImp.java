package com.group11.springboot.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.group11.springboot.springboot.modal.Flight;

@Repository
public class FlightDAOImp implements FlightDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Flight> get() {

		Session currSession = entityManager.unwrap(Session.class);
		Query<Flight> query = currSession.createQuery("from Flight", Flight.class);
		List<Flight> list = query.getResultList();
		return list;

	}

	@Override
	public Flight get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Flight emp = currSession.get(Flight.class, id);
		return emp;
	}

	@Override
	public void save(Flight flight) {
		
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(flight);

	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Flight emp = currSession.get(Flight.class, id);
		currSession.delete(emp);

	}

}
