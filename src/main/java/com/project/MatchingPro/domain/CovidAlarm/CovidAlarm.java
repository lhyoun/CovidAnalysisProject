package com.project.MatchingPro.domain.CovidAlarm;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class CovidAlarm {
	
	private String city;
	
	private String time;
	
	@Id // 기본키 설정
	private String message;
	private String cityhall;


}
