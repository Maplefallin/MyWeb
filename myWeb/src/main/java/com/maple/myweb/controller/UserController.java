package com.maple.myweb.controller;

import com.maple.myweb.pojo.Result;
import com.maple.myweb.pojo.User;
import com.maple.myweb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Result register(@Validated @RequestBody User user) {

        User u = userService.findUserByUsername(user.getUsername());

        if(u == null){
            userService.registerUser(user);
            return Result.success();
        }
        else {
            return Result.error("该用户已存在");
        }

    }

    @GetMapping("/login")
    public Result login(String username, String password) {

        User user = userService.findUserByUsername(username);

        if(user == null){
            return Result.error("该用户不存在");
        }

        if(!user.getPassword().equals(password)){
            return Result.error("密码错误");
        }
            return Result.success("token");
    }

}
