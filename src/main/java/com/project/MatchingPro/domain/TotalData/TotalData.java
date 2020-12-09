package com.project.MatchingPro.domain.TotalData;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class TotalData {
	
	@Id // 기본키 설정
	private String region;
	
	private String total;
	private String domestic;
	private String abroad;
	private String confirmed;	
	
	private String quarantined;
	private String quarantine_released;	
	private String deaths;	
	private String occur_rate;

}
