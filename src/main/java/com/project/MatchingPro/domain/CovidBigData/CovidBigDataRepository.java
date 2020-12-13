package com.project.MatchingPro.domain.CovidBigData;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CovidBigDataRepository extends JpaRepository<CovidBigData,Integer> {
	
	CovidBigData findById(int id);

} 