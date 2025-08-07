package com.douglas.agenda.agendamento.repository;

import com.douglas.agenda.agendamento.entities.Computer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
    @Query("SELECT c FROM Computer c WHERE c.id NOT IN (" +
            "SELECT r.computer.id FROM Reservation r WHERE r.time = :time)")
    List<Computer> findAvailableAtTime(@Param("time") LocalDateTime time);
}
