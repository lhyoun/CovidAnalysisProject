// ok
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, Tabs, Tab, SplitButton, ButtonGroup, Dropdown, DropdownButton, FormControl, Spinner, Form, Button } from 'react-bootstrap';
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
    // teamList fetch -> teamCard에 담아서 보여줌
    fetch("http://localhost:8000/teamList", {
      method: "get",
    }).then((res) => res.json())
      .then((res) => {
        console.log("mainForm teamList response [json type]", res);
        setTeams(res);
      });

    // userList fetch -> userCard에 담아서 보여줌
    fetch("http://localhost:8000/userList", {
      method: "get",
    }).then((res) => res.json())
      .then((res) => {
        console.log("mainForm userList response [json type]", res);
        setUsers(res);
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
                    today page
                  </Tab>

                  {/* rank tab */}
                  <Tab eventKey="week" title="THIS WEEK">
                    <Br2/>
                    <DropdownButton
                      as={ButtonGroup}
                      key={1}
                      id={`dropdown-button-drop`}
                      size="sm"
                      variant="outline-primary"
                      title="Select locate"
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
                    alltime page<br></br>
                    전국 지도를 default로 하고<br></br>
                    tab에서 지역을 선택하면 해당 지역의 최근 발생 근황을 covidmap처럼 보여준다
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