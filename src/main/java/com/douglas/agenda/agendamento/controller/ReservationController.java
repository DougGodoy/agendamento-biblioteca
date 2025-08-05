package com.douglas.agenda.agendamento.controller;

import com.douglas.agenda.agendamento.dto.ReservationCreateDTO;
import com.douglas.agenda.agendamento.dto.ReservationDTO;
import com.douglas.agenda.agendamento.service.ReservationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService){
        this.reservationService = reservationService;
    }

    //Criar resererva
    @PostMapping
    public ResponseEntity<ReservationDTO> create(@RequestBody ReservationCreateDTO dto){
        ReservationDTO created = reservationService.create(dto);
        return ResponseEntity.ok(created);
    }

    //Listar todas as Reservas
    @GetMapping
    public ResponseEntity<List<ReservationDTO>> findAll(){
        return ResponseEntity.ok(reservationService.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        reservationService.Delete(id);
        return ResponseEntity.noContent().build();
    }

}
