package com.maple.myweb.mapper;

import com.maple.myweb.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    User findByUserName(@Param("username") String username);

    int add(@Param("username") String username, @Param("password") String password);
}