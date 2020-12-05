
# CMPE 172 Group 11 Project - SJSU

https://github.com/TanNguyen5659/172cmpe

Course: Enterprise Software - CMPE172/Fall 2020

Team members: Tan Nguyen, Toan Tran, Khoa Pham

Flight management and analysis system:

 + Three tier architecture web app
 
 + Analyze flight data at SFO on a specific day (mock up database)
 
 + Analytics tool to graph the peak time flights
  
 + Offer users the ability to query data according to: flight number, Airline, and destination.
 
Data could later be used by airlines to organize flight time, reschedules the number of flights to destinations to optimize their resources.

Built by using React.js, Springboot and RDS database.

Screenshots of the webapp:

![Application Home page](https://i.ibb.co/hW4hSNp/Screen-Shot-2020-12-03-at-8-48-04-PM.png)

![Add flight page](https://i.ibb.co/rm2jZjY/Screen-Shot-2020-12-03-at-8-48-08-PM.png])

![Graphing page](https://i.ibb.co/FDKb0TV/Screen-Shot-2020-12-03-at-8-48-19-PM.png)


### How to run the project

You'll need maven, npm and JAVA pre-installed, which most probably you'll already have.  To run the application, run the following commands from the console.

```sh
$ mvn clean
$ mvn package
$ java -jar src/springboot-0.0.1-SNAPSHOT.jar
```
Also, I have initialized the .jar file if you want to quick run. Run the terminal on the folder, and run the following command:
```sh
$ java -jar springboot-0.0.1-SNAPSHOT.jar
```
After done, try to access localhost:8080

