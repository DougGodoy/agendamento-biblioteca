package com.douglas.agenda.agendamento.controller;

import com.douglas.agenda.agendamento.dto.UserCreateDTO;
import com.douglas.agenda.agendamento.dto.UserDTO;
import com.douglas.agenda.agendamento.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    // Criar um usuário
    @PostMapping
    public ResponseEntity<UserDTO> create(@RequestBody UserCreateDTO dto){
        UserDTO createdUser = userService.create(dto);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll(){
        return ResponseEntity.ok(userService.findAll());
    }
}
