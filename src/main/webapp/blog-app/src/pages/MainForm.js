// ok
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, Tabs, Tab, SplitButton, ButtonGroup, Dropdown, DropdownButton, FormControl, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import TitleH3TagStyle from './constant/TitleH3TagStyle';
import Br2 from './constant/Br2';

const MainFormTopMarginStyle = styled.div`
    margin-top:4%;
`;


const MainCardStyle = styled.div`
  width: 100%;
  margin: auto;
`;

const JumbotronStyle=styled.div`
  opacity: 0.9;
`;

const MainForm = () => {
  const [search_locate, setSearch_locate] = useState('');

  const inputHandle = (e) => {
    setSearch_locate(e.target.value);
  };

  useEffect(() => {
    // 전체 확진 data
    fetch("http://localhost:8000/allData", {
      method: "get",
    }).then((res) => res.json())
      .then((res) => {
        console.log("mainForm allData [json type]", res);
        setData(res);
      });

      fetch("http://localhost:8000/CovidAlarm", {
        method: "get",
      }).then((res) => res.json())
        .then((res) => {
          console.log("mainForm CovidAlarm [json type]", res);
          setCovidAlarm(res);
        });

    // rank fetch -> rank tab에서 보여줌
    fetch("http://localhost:8000/rank", {
      method: "get",
    }).then((res) => res.json())
      .then((res) => {
        console.log("mainForm rank response [json type]", res);
        setRank(res);
      });
  }, []);

  const [data, setData] = useState([{
    
  }]);

  const [covidAlarm, setCovidAlarm] = useState([{
    
  }]);



  const [rank, setRank] = useState([]);
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [locate, setLocate] = useState('busan');

  const week_locate = (locate) => {
    if (locate === 'busan') {
      return <div>
        this is busan data area
      </div>
    } else {
      return <div>
        this is seoul data area
      </div>
    }
  }

  return (
    <Container>
      <MainFormTopMarginStyle>
        <Br2/>
        {/* <Slide /> */}


        <Row>
          <MainCardStyle>
            <JumbotronStyle>
              <Jumbotron>


                <TitleH3TagStyle msg="This page title is busan covid map"></TitleH3TagStyle>
                <Br2/>

                <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
                
                  {/* teamlist tab */}
                  <Tab eventKey="today" title="TODAY">
                    <br/>

                    <DropdownButton
                      as={ButtonGroup}
                      key={1}
                      id={`dropdown-button-drop`}
                      size="sm"
                      variant="outline-primary"
                      title="Select region"
                      onSelect={(eventKey)=>{
                        setLocate(eventKey)
                        console.log('이전에 선택되어 있던 key는 ', locate);
                      }}
                    >
                      <Dropdown.Item eventKey="busan">Busan</Dropdown.Item>
                      <Dropdown.Item eventKey="seoul">Seoul</Dropdown.Item>
                      {/* <Dropdown.Divider /> */}
                    </DropdownButton>


                    <Row> 
                      {covidAlarm.map(
                        (res) => (
                          <Col md={4}>  
                            <MainFormTopMarginStyle>
                              <Card border="info" style={{ width: '18rem' }}>
                                <Card.Header>{res.city}</Card.Header>
                                <Card.Body>
                                  <Card.Title>{res.time}</Card.Title>
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

                  {/* rank tab */}
                  <Tab eventKey="week" title="THIS WEEK">
                    <br/>
                    <DropdownButton
                      as={ButtonGroup}
                      key={1}
                      id={`dropdown-button-drop`}
                      size="sm"
                      variant="outline-primary"
                      title="Select region"
                      onSelect={(eventKey)=>{
                        setLocate(eventKey)
                        console.log('이전에 선택되어 있던 key는 ', locate);
                      }}
                    >
                      <Dropdown.Item eventKey="busan">Busan</Dropdown.Item>
                      <Dropdown.Item eventKey="seoul">Seoul</Dropdown.Item>
                      {/* <Dropdown.Divider /> */}
                    </DropdownButton>
                    
                    {week_locate(locate)}

                  </Tab>

                  {/* userlist tab */}
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


                    <Row>
                      
                    </Row>

                  </Tab>
                </Tabs>


              </Jumbotron>
 
              <Jumbotron>
                <TitleH3TagStyle msg="지금 가려고 하는 곳이 얼마나 안전한지 확인해 보세요"></TitleH3TagStyle>
                <Br2/>

                <Form inline>
                  <Form.Control
                    className="mr-sm-2"
										type="text"
										name="search_locate"
										placeholder="Enter to locate"
										onChange={inputHandle}
										value={search_locate} />
                  <Button onClick={function(){alert("complete. search about '" + search_locate + "'")}} variant="outline-primary">Search</Button>
                </Form>
              </Jumbotron>

              <Jumbotron>
                <TitleH3TagStyle msg="우리 동네의 확진 소식을 받아보세요"></TitleH3TagStyle>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
              </Jumbotron>
            </JumbotronStyle>
          </MainCardStyle>
        </Row>


      </MainFormTopMarginStyle>
    </Container>
  );
};

export default MainForm;