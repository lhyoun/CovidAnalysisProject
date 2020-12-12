import React, { useEffect, useState } from 'react';
 
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const CovidCountry = () => {
  useEffect(() => {
    // 전체 확진 data
    fetch(`http://localhost:8000/CovidBigData/{id}`, {
			method: "get",
		}).then((res) => res.json())
			.then((res) => {
				console.log("teamDetailForm teamDetail info fetch (json type) ", res);
				setPositive_Rate(res.positive_rate);
				setTotal_cases_per_million(res.total_cases_per_million);
				setNew_cases_per_million(res.new_cases_per_million);
			});
	}, []);





  const [positive_rate, setPositive_Rate] = useState([]);
  const [total_cases_per_million, setTotal_cases_per_million] = useState([]);
  const [new_cases_per_million, setNew_cases_per_million] = useState([]);

  const data=[
    {
      
        data: {
          positive_rate: positive_rate,
          total_cases_per_million: total_cases_per_million,
          new_cases_per_million: new_cases_per_million,
          
        },
        meta: { color: 'blue' }
  }]
 
    const captions = {
      // columns
      positive_rate:'positive_rate',
      total_cases_per_million:'total_cases_per_million',
      new_cases_per_million:'new_cases_per_million'
     
    };
 

   
    return (
      <div>

<RadarChart
    captions={captions}
    data={data}
    size={450}
  />
 
        {/* <RadarChart
            captions={{
              // columns
              bat1tery: 'Battery Capacity',
      design: 'Design',
      useful: 'Usefulness',
      speed: 'Speed',
      weight: 'Weight'
            }}
            data={[
              // data
              {
                data: {
                  bat1tery: 1,
      design: 2,
      useful: 3,
      speed: 4,
      weight: 5
                },
                meta: { color: '#58FCEC' }
              },
            ]}
            size={400}
          /> */}
        </div>
    );
  };

 
export default CovidCountry;