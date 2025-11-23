FROM eclipse-temurin:21-jdk AS build
USER root
RUN mkdir -p /root/.m2 && mkdir -p /root/.m2/repository && mkdir -p /usr/app
WORKDIR /usr/app

COPY mvnw .
COPY .mvn ./.mvn
RUN sed -i 's/\r$//' mvnw
RUN chmod +x mvnw

# Maven step 1
COPY pom.xml .
RUN ./mvnw -e -X verify clean

# Maven step 2
COPY src ./src
RUN ./mvnw package

FROM eclipse-temurin:21-jre
COPY --from=build /usr/app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
