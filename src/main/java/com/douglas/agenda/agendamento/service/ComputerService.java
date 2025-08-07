package com.douglas.agenda.agendamento.service;

import com.douglas.agenda.agendamento.dto.ComputerDTO;
import com.douglas.agenda.agendamento.entities.Computer;
import com.douglas.agenda.agendamento.repository.ComputerRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ComputerService {

    private final ComputerRepository repository;

    public ComputerService(ComputerRepository repository){
        this.repository = repository;
    }

    public List<Computer> findAll(){
        return repository.findAll();
    }

    public Computer insert(ComputerDTO dto){
        Computer computer = new Computer();
        computer.setName(dto.getName());
        computer.setLocalization(dto.getLocalization());
        computer.setDescription(dto.getDescription());
        return repository.save(computer);
    }

    public List<ComputerDTO> findAvailableAtTime(LocalDateTime time) {
        List<Computer> computers = repository.findAvailableAtTime(time);
        return computers.stream().map(ComputerDTO::new).toList();
    }

}
