package com.project.MatchingPro.domain.CovidRoute;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class CovidRoute {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 해당 데이터베이스 번호증가 전략을 따라가기
	private int id;

	private String city;
	private String district;
	private String location_type;
	private String location_name;
	private String address;
	private String exposed_time;
	private String sanitized;
	

}
