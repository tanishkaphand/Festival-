package com.example.festivalapi.service;

import com.example.festivalapi.model.Festival;
import com.example.festivalapi.repository.FestivalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FestivalService {

    private final FestivalRepository repo;

    public FestivalService(FestivalRepository repo) {
        this.repo = repo;
    }

    public List<Festival> getAll() {
        return repo.findAll();
    }

    public Festival getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Festival create(Festival f) {
        f.setId(null);
        return repo.save(f);
    }

    public Festival update(Festival f) {
        return repo.save(f);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
