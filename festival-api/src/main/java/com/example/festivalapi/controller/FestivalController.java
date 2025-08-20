package com.example.festivalapi.controller;

import com.example.festivalapi.model.Festival;
import com.example.festivalapi.service.FestivalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/festivals")
@CrossOrigin(origins = "*")
public class FestivalController {

    private final FestivalService service;

    public FestivalController(FestivalService service) {
        this.service = service;
    }

    @GetMapping
    public List<Festival> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Festival getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Festival create(@RequestBody Festival f) {
        return service.create(f);
    }

    @PutMapping
    public Festival update(@RequestBody Festival f) {
        return service.update(f);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
