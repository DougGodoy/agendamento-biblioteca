package com.douglas.agenda.agendamento.repository;

import com.douglas.agenda.agendamento.entities.Computer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComputerRepository extends JpaRepository<Computer, Long> {
}
