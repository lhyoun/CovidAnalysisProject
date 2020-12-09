package com.project.MatchingPro.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.MatchingPro.domain.CovidRoute.CovidRoute;
import com.project.MatchingPro.domain.CovidRoute.CovidRouteRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CovidRouteController {

	private final HttpSession session;
	private final CovidRouteRepository CovidRouteService;
	private final CovidRouteRepository CovidRouteRepository;
	
	@GetMapping("/CovidRoute")
	public List<CovidRoute> allData() {
		return CovidRouteRepository.findAll();
	}
	
}

