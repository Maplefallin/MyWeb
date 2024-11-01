//package com.maple.myweb.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import javax.sql.DataSource;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//
//@Configuration
//public class DataSourceConfig {
//
//    @Bean
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
//        dataSource.setUrl("jdbc:mysql://localhost:3306/big_event");
//        dataSource.setUsername("root");
//        dataSource.setPassword("123456");
//        return dataSource;
//    }
//}