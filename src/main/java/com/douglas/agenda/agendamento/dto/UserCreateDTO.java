package com.douglas.agenda.agendamento.dto;

import java.time.LocalDate;

public class UserCreateDTO {

    private String name;
    private String rg;
    private LocalDate dateOfBirth;

    public UserCreateDTO(){}

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

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
