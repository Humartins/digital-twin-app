package com.rocket.digital_twin_app.config;

import com.rocket.digital_twin_app.model.Sensor;
import com.rocket.digital_twin_app.repository.SensorRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer {

    private final SensorRepository sensorRepository;

    public DataInitializer(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    @PostConstruct
    public void init() {
        if (sensorRepository.count() == 0) {
            sensorRepository.save(new Sensor("1", "Sensor de Pressão", "pressao"));
            sensorRepository.save(new Sensor("2", "Sensor Magnético", "magnetico"));
            sensorRepository.save(new Sensor("3", "Sensor Indutivo", "indutivo"));
        }
    }
}
