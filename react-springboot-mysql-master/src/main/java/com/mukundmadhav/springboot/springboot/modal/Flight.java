package com.mukundmadhav.springboot.springboot.modal;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_emp")
public class Flight {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)


	@Column
	private Integer id;
	@Column
	private String flightNumber; //flight number

	@Column
	private String airline; //airline

	@Column
	private String arrival;

	@Column
	private String departure;

	@Column
	private String  arrivalTime;

	@Column
	private String departureTime;

	@Column
	private String status;

	@Override
	public String toString() {
		return "Flight [id=	" + id + ", flightNumber=" + flightNumber + ", airline=" + airline + ", arrival=" + arrival + ", departure=" + departure + ", arrivalTime=" + arrivalTime + ", departureTime=" + departureTime +",  status="
				+ status + "]";
	}

	public Integer getId() {
		return id;}

	public void setId(Integer id) {
		this.id = id;}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getAirline() {
		return airline;
	}

	public void setAirline(String airline) {
		this.airline = airline;
	}

	public String getArrival(){
		return arrival;
	}

	public void setArrival(String arrival) {
		this.arrival = arrival;
	}

	public String getDeparture() {
		return departure;
	}

	public void setDeparture(String departure) {
		this.departure = departure;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
