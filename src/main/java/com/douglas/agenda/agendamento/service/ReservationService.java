package com.douglas.agenda.agendamento.service;

import com.douglas.agenda.agendamento.dto.ReservationCreateDTO;
import com.douglas.agenda.agendamento.dto.ReservationDTO;
import com.douglas.agenda.agendamento.entities.Computer;
import com.douglas.agenda.agendamento.entities.Reservation;
import com.douglas.agenda.agendamento.entities.User;
import com.douglas.agenda.agendamento.repository.ComputerRepository;
import com.douglas.agenda.agendamento.repository.ReservationRepository;
import com.douglas.agenda.agendamento.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final ComputerRepository computerRepository;

    public ReservationService (
            ReservationRepository reservationRepository,
            UserRepository userRepository,
            ComputerRepository computerRepository
    ){
            this.reservationRepository = reservationRepository;
            this.userRepository = userRepository;
            this.computerRepository = computerRepository;
    }

    public ReservationDTO create(ReservationCreateDTO dto){
        //Busca Usuário
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        //Busca Computador
        Computer computer = computerRepository.findById(dto.getComputerId())
                .orElseThrow(() -> new RuntimeException("Computador não encontrado"));

        //Cria Reserva
        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setComputer(computer);
        reservation.setTime(dto.getTime());

        //Salva no Banco
        Reservation saved = reservationRepository.save(reservation);

        //Retorna o DTO com os dados da reserva salva
        return new ReservationDTO(saved);
    }

    public List<ReservationDTO> findAll(){
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations.stream().map(ReservationDTO::new).toList();
    }
}
