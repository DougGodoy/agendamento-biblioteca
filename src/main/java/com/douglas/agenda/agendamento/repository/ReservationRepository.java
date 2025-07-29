package com.douglas.agenda.agendamento.repository;

import com.douglas.agenda.agendamento.entities.Computer;
import com.douglas.agenda.agendamento.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByComputerAndTime(Computer computer, LocalDateTime time);

    @Query("SELECT r FROM Reservation r WHERE r.user.id = :userId AND DATE(r.time) = :date")
    List<Reservation> findByUserAndDay(@Param("userId") Long userId, @Param("date")LocalDate date);
}
