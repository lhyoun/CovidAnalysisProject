package com.project.MatchingPro.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.MatchingPro.domain.CovidBigData.CovidBigData;
import com.project.MatchingPro.domain.CovidBigData.CovidBigDataRepository;
import com.project.MatchingPro.domain.user.User;

import lombok.RequiredArgsConstructor;

public class CovidBigDataService {
	
	// 유저상세보기
	public ResponseEntity<?> detail(int id) {
		CovidBigData covidbigdata= CovidBigDataRepository.findById(id).get();

		return new ResponseEntity<CovidBigData>(covidbigdata, HttpStatus.OK);
	}

	

}
