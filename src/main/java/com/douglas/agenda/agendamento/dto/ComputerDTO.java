package com.douglas.agenda.agendamento.dto;

import com.douglas.agenda.agendamento.entities.Computer;

public class ComputerDTO {
    private Long id;
    private String name;
    private String localization;
    private String description;


    public ComputerDTO(){
    };

    public ComputerDTO(Computer entity){
        this.id = entity.getId();
        this.name = entity.getName();
        this.localization = entity.getLocalization();
        this.description = entity.getDescription();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocalization() {
        return localization;
    }

    public void setLocalization(String localization) {
        this.localization = localization;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
