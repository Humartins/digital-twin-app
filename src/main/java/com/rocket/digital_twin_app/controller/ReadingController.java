package com.rocket.digital_twin_app.controller;

import com.rocket.digital_twin_app.model.Reading;
import com.rocket.digital_twin_app.repository.ReadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/readings")
@CrossOrigin(origins = "*") // Libera para frontend acessar de outro domínio/IP
public class ReadingController {

    @Autowired
    private ReadingRepository readingRepository;

    // GET all readings
    @GetMapping
    public List<Reading> getAllReadings() {
        return readingRepository.findAll();
    }

    // POST a new reading
    @PostMapping
    public Reading createReading(@RequestBody Reading reading) {
        return readingRepository.save(reading);
    }

    // GET readings by sensor ID
    @GetMapping("/sensor/{sensorId}")
    public List<Reading> getReadingsBySensor(@PathVariable String sensorId) {
        return readingRepository.findBySensorId(sensorId);
    }
}
