package com.project.MatchingPro.domain.CovidAlarm;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CovidAlarmRepository extends JpaRepository<CovidAlarm, String> {
	@Query(value = "select * from CovidAlarm order by time", nativeQuery = true)//nativeQuery: 이쿼리를 사용하겠다.
	List<CovidAlarm> CovidAlarm_All();
}
