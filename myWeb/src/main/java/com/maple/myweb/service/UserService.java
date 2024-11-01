package com.maple.myweb.service;

import com.maple.myweb.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public interface UserService {

    User findUserById(int id);
    @Transactional
    User findUserByUsername(String username);
    void registerUser(User user);

}
