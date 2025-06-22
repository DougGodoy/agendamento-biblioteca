package com.douglas.agenda.agendamento.repository;

import com.douglas.agenda.agendamento.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
