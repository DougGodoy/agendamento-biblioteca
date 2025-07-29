package com.douglas.agenda.agendamento.controller;

import com.douglas.agenda.agendamento.dto.ComputerDTO;
import com.douglas.agenda.agendamento.entities.Computer;
import com.douglas.agenda.agendamento.service.ComputerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/computers")
public class ComputerController {

    private final ComputerService service;

    public ComputerController(ComputerService service){
        this.service = service;
    }

    @GetMapping
    public List<Computer> getAllComputers(){
        return service.findAll();
    }

    @PostMapping
    public Computer createComputer(@RequestBody ComputerDTO dto){
        return service.insert(dto);
    }
}
