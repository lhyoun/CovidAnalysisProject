// ok
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, Tabs, Tab, ButtonGroup, Dropdown, DropdownButton, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import TitleH3TagStyle from './constant/TitleH3TagStyle';
import Br2 from './constant/Br2';
import Korea from '../components/covidJumbotron/Korea';
import Worldwide from '../components/covidJumbotron/Worldwide';
import Safety from '../components/covidJumbotron/Safety';
import A from '../components/covidJumbotron/A';
// header가 고정(자리차지x)이라 별도의 마진
const MainFormTopMarginStyle = styled.div`
    margin-top:4%;
`;
const JumbotronStyle=styled.div`
    width: 100%;
    margin: auto;
    opacity: 0.9;
`;

const MainForm = () => {
  
    return (
        <Container>
            <MainFormTopMarginStyle>
                <Br2/>
                {/* <Slide /> */}
                <Row>
                    <JumbotronStyle>
                        
                    {/* <Korea></Korea>

                    <Worldwide></Worldwide>

                    <Safety></Safety> 
                    */}

                    <A/>
                    </JumbotronStyle>
                </Row>
            </MainFormTopMarginStyle>
        </Container>
    );
};

export default MainForm;