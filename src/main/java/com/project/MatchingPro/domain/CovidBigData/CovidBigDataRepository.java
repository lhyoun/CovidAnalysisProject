package com.project.MatchingPro.domain.CovidBigData;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;



public interface CovidBigDataRepository extends JpaRepository<CovidBigData,Integer> {
	
	CovidBigData findById(int id) ;
		
	
		

}