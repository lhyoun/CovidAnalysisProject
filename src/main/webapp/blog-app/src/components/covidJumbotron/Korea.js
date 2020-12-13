import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Jumbotron, Tabs, Tab, ButtonGroup, Dropdown, DropdownButton, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Br2 from '../../pages/constant/Br2';
import TitleH3TagStyle from '../../pages/constant/TitleH3TagStyle';
const MainFormTopMarginStyle = styled.div`
    margin-top:4%;
`;
const Korea = (props) => {
    const inputHandle = (e) => {
        setSearch_region(e.target.value);
      };
      //
      const [region, setRegion] = useState('busan');
      const [search_region, setSearch_region] = useState('');
      // tab1 - 실시간 확진 data
      const [covidAlarm, setCovidAlarm] = useState([{}]);
      // tab3 - 지역별 누적 data
      const [data, setData] = useState([{}]);
      //
      const week_region = (region) => {
        if (region === 'busan') {
          return <div>
            this is busan data area
          </div>
        } else {
          return <div>
            this is seoul data area
          </div>
        }
      }
    
      useEffect(() => {
        // tab1 - 실시간 확진 data
        fetch("http://localhost:8000/CovidAlarm", {
          method: "get",
        }).then((res) => res.json())
        .then((res) => {
          console.log("mainForm CovidAlarm [json type]", res);
          setCovidAlarm(res);
        });
        // tab3 - 지역별 누적 data
        fetch("http://localhost:8000/allData", {
          method: "get",
        }).then((res) => res.json())
        .then((res) => {
          console.log("mainForm allData [json type]", res);
          setData(res);
        });
      }, []);
    return (
    <Jumbotron>
        <TitleH3TagStyle msg="This page title is busan covid map"></TitleH3TagStyle>
        <Br2/>
        <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
            {/* tab1 실시간 코로나 소식입니다 */}
            <Tab eventKey="today" title="TODAY">
            <br/>
            <Row> 
                {covidAlarm.map(
                (res) => (
                    <Col md={4}>  
                    <MainFormTopMarginStyle>
                        <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header>{res.city} ({res.time})</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            {res.message}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </MainFormTopMarginStyle>         
                    </Col>
                ))}
            </Row>
            </Tab>

            {/* tab2 지역별 코로나맵 */}
            <Tab eventKey="week" title="THIS WEEK">
            <br/>
            <DropdownButton
                as={ButtonGroup}
                key={1}
                id={`dropdown-button-drop`}
                size="sm"
                variant="outline-primary"
                title="region"
                onSelect={(eventKey)=>{
                setRegion(eventKey)
                console.log('이전에 선택되어 있던 key는 ', region);}}>
                <Dropdown.Item eventKey="busan">Busan</Dropdown.Item>
                <Dropdown.Item eventKey="seoul">Seoul</Dropdown.Item>
                {/* <Dropdown.Divider /> */}
            </DropdownButton>
            {week_region(region)}
            </Tab>

            {/* tab3 지역별 누적 */}
            <Tab eventKey="alltime" title="ALL TIME">
            <br/>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>지역</th>
                    <th>확진자</th>
                    <th>국내</th>
                    <th>해외</th>
                    <th>누적확진자</th>
                    <th>격리해제</th>
                    <th>격리중</th>
                    <th>사망</th>
                    {/* 10만명당 */}
                    <th>발생률</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(
                    (res) => (
                        <tr>
                    <td>{res.region}</td>
                    <td>{res.total}</td>
                    <td>{res.domestic}</td>
                    <td>{res.abroad}</td>
                    <td>{res.confirmed}</td>
                    <td>{res.quarantined}</td>
                    <td>{res.quarantine_released}</td>
                    <td>{res.deaths}</td>
                    <td>{res.occur_rate}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </Tab>
        </Tabs>
        </Jumbotron>
    );
};

export default Korea;