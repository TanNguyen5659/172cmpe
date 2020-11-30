FROM openjdk:latest

WORKDIR /docker

COPY ./src/springboot-0.0.1-SNAPSHOT.jar /docker

RUN sh -c "touch springboot-0.0.1-SNAPSHOT.jar"

ENTRYPOINT ["java", "-jar", "springboot-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080