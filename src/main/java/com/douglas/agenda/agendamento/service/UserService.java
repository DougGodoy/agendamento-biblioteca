package com.douglas.agenda.agendamento.service;

import com.douglas.agenda.agendamento.dto.UserCreateDTO;
import com.douglas.agenda.agendamento.dto.UserDTO;
import com.douglas.agenda.agendamento.entities.User;
import com.douglas.agenda.agendamento.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService (UserRepository userRepository){
        this.userRepository = userRepository;
    }

    // Criar um usuário
    public UserDTO create(UserCreateDTO dto){
        User user = new User();
        user.setName(dto.getName());
        user.setRg(dto.getRg());
        user.setDateOfBirth(dto.getDateOfBirth());

        user = userRepository.save(user);

        return new UserDTO(user);
    }

    // Listar todos os usuários
    public List<UserDTO> findAll(){
        return userRepository.findAll().stream().map(UserDTO::new)
                .collect(Collectors.toList());
    }

}
