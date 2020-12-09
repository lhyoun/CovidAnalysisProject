package com.project.MatchingPro.controller;


import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.MatchingPro.domain.TotalData.TotalData;
import com.project.MatchingPro.domain.TotalData.TotalDataRepository;
import com.project.MatchingPro.domain.user.User;
import com.project.MatchingPro.domain.user.UserRepository;
import com.project.MatchingPro.service.TotalDataService;
import com.project.MatchingPro.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class TotalDataController {

	private final HttpSession session;
	private final TotalDataService totDataService;
	private final TotalDataRepository totalDataRepository;
	
	@GetMapping("/allData")
	public List<TotalData> allData() {
		return totalDataRepository.findAll();
	}
	
}
