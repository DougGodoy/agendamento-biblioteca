package com.douglas.agenda.agendamento.dto;

import com.douglas.agenda.agendamento.entities.Reservation;

import java.time.LocalDateTime;

public class ReservationDTO {
    private Long id;
    private String userName;
    private String computerDescription;
    private LocalDateTime time;

    public ReservationDTO (){}

    public ReservationDTO (Reservation reservation){
        this.id = reservation.getId();
        this.userName = reservation.getUser().getName();
        this.computerDescription = reservation.getComputer().getDescription();
        this.time = reservation.getTime();
    }
    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getComputerDescription() {
        return computerDescription;
    }

    public void setComputerDescription(String computerDescription) {
        this.computerDescription = computerDescription;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }


}
