package com.project.MatchingPro.domain.CovidBigData;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class CovidBigData {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 해당 데이터베이스 번호증가 전략을 따라가기
	private int id;


	private String iso_code;
	private String continent;
	private String location;
	private String date;
	private String total_cases;
	private String new_cases;
	private String total_deaths;
	private String new_deaths;
	private String total_cases_per_million;
	private String new_cases_per_million;
	private String total_deaths_per_million;
	private String new_deaths_per_million;
	private String reproduction_rate;
	private String new_tests;
	

	private String total_tests;
	private String total_tests_per_thousand;
	private String new_tests_per_thousand;
	
	
	
	private String positive_rate;
	private String population;
	private String population_density;
	private String median_age;
	private String aged_65_older;
	private String aged_70_older;
	
	private String gdp_per_capita;
	private String hospital_beds_per_thousand;
	private String life_expectancy;
	private String human_development_index;

	

}
