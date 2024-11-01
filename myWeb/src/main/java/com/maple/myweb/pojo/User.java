package com.maple.myweb.pojo;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class User {
    private Integer id;
    private String username;
    private String password;
    private String nickname;
    private String email;

    private String userPic;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
