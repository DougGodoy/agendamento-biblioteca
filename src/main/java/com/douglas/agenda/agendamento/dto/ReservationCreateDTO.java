package com.douglas.agenda.agendamento.dto;

import java.time.LocalDateTime;

public class ReservationCreateDTO {
    private Long userId;
    private Long computerId;
    private LocalDateTime time;

    public ReservationCreateDTO(){};

    public ReservationCreateDTO(Long userId, Long computerId, LocalDateTime time){
        this.userId = userId;
        this.computerId = computerId;
        this.time = time;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getComputerId() {
        return computerId;
    }

        public void setComputerId(Long computerId) {
        this.computerId = computerId;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }
}
