package com.project.MatchingPro.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.MatchingPro.domain.CovidBigData.CovidBigData;
import com.project.MatchingPro.domain.CovidBigData.CovidBigDataRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class CovidBigDataService {

	public final CovidBigDataRepository covidBigDataRepository;
	
	public ResponseEntity<?> detail(int id) {
		CovidBigData covidbigdata= covidBigDataRepository.findById(id);

		return new ResponseEntity<CovidBigData>(covidbigdata, HttpStatus.OK);
	}

}