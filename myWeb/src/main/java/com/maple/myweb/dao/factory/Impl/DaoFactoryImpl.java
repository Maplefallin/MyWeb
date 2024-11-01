package com.maple.myweb.dao.factory.Impl;

import com.maple.myweb.dao.Impl.UserDaoImpl;
import com.maple.myweb.dao.UserDao;
import com.maple.myweb.dao.factory.DaoFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;

@Component
public class DaoFactoryImpl implements DaoFactory {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public UserDao getUserDao() {
        return UserDaoImpl.getInstance(jdbcTemplate);
    }
}
