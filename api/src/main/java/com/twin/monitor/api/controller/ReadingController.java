package com.twin.monitor.api.controller;

import com.twin.monitor.api.model.Reading;
import com.twin.monitor.api.repository.ReadingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") // Libera CORS
@RestController
@RequestMapping("/api/readings")
public class ReadingController {

    private final ReadingRepository repository;

    public ReadingController(ReadingRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Reading createReading(@RequestBody Reading reading) {
        return repository.save(reading);
    }

    @GetMapping
    public List<Reading> getAllReadings() {
        return repository.findAll();
    }

    @GetMapping("/{sensorId}")
    public List<Reading> getReadingsBySensor(@PathVariable String sensorId) {
        return repository.findBySensorId(sensorId);
    }
}