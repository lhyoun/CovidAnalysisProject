package com.project.MatchingPro.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.MatchingPro.domain.CovidBigData.CovidBigData;
import com.project.MatchingPro.domain.CovidBigData.CovidBigDataRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CovidBigDataController {

	private final HttpSession session;
	private final CovidBigDataRepository CovidBigDataService;
	private final CovidBigDataRepository CovidBigDataRepository;
	
	@GetMapping("/CovidBigData")
	public List<CovidBigData> allData() {
		return CovidBigDataRepository.findAll();
	}
	int id=1; 
	@GetMapping("/CovidBigData/{id}")
	public ResponseEntity<?> detail(@PathVariable int id) {
		return CovidBigDataService.detail(id);
		System.out.println("-------------");
	}
	
	
	
}

