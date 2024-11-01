package com.maple.myweb.service.Impl;

import com.maple.myweb.dao.UserDao;
import com.maple.myweb.dao.factory.DaoFactory;
import com.maple.myweb.dao.factory.Impl.DaoFactoryImpl;
import com.maple.myweb.mapper.UserMapper;
import com.maple.myweb.pojo.User;
import com.maple.myweb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    DaoFactory daoFactory;


    @Override
    public User findUserById(int id) {
        return null;
    }

    @Override
    public User findUserByUsername(String username) {
        UserDao userDao = daoFactory.getUserDao();
        User user = userDao.findByUserName(username);
        return user;
    }

    @Override
    public void registerUser(User user) {
        UserDao userDao = daoFactory.getUserDao();
        if (user.getUsername() != null && user.getPassword() != null) {
            userDao.add(user.getUsername(), user.getPassword());
        } else {
            // 处理用户名或密码为 null 的情况
            System.out.println("用户名或密码不能为空");
        }
    }
}
