package com.douglas.agenda.agendamento.repository;

import com.douglas.agenda.agendamento.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
