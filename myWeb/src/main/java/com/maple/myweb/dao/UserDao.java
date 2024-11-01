package com.maple.myweb.dao;

import com.maple.myweb.pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserDao {
    User findByUserName(String username);
    void add( String username, String password);
}
