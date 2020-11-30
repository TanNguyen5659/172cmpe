
# CMPE 172 Group 11 Project - SJSU

Course: Enterprise Software - CMPE172/Fall 2020

Team members: Tan Nguyen, Toan Tran, Khoa Pham

Flight management and analysis system:

 + Three tier architecture web app
 
 + Analyze flight data at SFO on a specific day (mock up database)
 
 + Analytics tool to graph the peak time flights
  
 + Offer users the ability to query data according to: flight number, Airline, and destination.
 
Data could later be used by airlines to organize flight time, reschedules the number of flights to destinations to optimize their resources.

Built by using React.js, Springboot and RDS database

![Application Home page]()


![List of all data in our React app]()


### Installation

You'll need maven, npm and JAVA pre-installed, which most probably you'll already have.  To run the application, run the following commands from the console.

```sh
$ mvn clean
$ mvn package
$ java -jar target/springboot-0.0.1-SNAPSHOT.jar
```


