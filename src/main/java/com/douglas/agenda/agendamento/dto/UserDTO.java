package com.douglas.agenda.agendamento.dto;

import com.douglas.agenda.agendamento.entities.User;

public class UserDTO {
    private long id;
    private String name;
    private String rg;

    public UserDTO() {}

    public UserDTO(User user){
        this.id = user.getId();
        this.rg = user.getRg();
        this.name = user.getName();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }
}
