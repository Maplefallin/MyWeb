package com.maple.myweb.dao.Impl;

import com.maple.myweb.dao.UserDao;
import com.maple.myweb.pojo.User;;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Component
public class UserDaoImpl implements UserDao {

    private static UserDaoImpl instance;
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    private UserDaoImpl(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    public static synchronized UserDaoImpl getInstance(JdbcTemplate jdbcTemplate){
        //饿汉式
        if(instance == null){
            instance = new UserDaoImpl(jdbcTemplate);
        }
        return instance;
    }

    @Override
    public User findByUserName(String username) {
        String sql = "SELECT * FROM user WHERE username = ?";
        List<User> users = jdbcTemplate.query(sql, new Object[]{username}, new RowMapper<User>() {
            @Override
            public User mapRow(ResultSet rs, int rowNum) throws SQLException {
                User user = new User();
                user.setId(rs.getInt("id"));
                user.setUsername(rs.getString("username"));
                user.setPassword(rs.getString("password"));
                return user;
            }
        });

        if (users.isEmpty()) {
            return null; // 或者抛出自定义异常
        }
        return users.get(0);
    }

    @Override
    public void add(String username, String password) {
        String sql = "INSERT INTO user (username, password, create_time, update_time) VALUES (?, ?, NOW(), NOW())";
        jdbcTemplate.update(sql, username, password);
    }
}
