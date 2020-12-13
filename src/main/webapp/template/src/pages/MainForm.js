// ok
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, Tabs, Tab, ButtonGroup, Dropdown, DropdownButton, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import Br2 from './constant/Br2';

import Korea from '../components/covidJumbotron/Korea';
import Worldwide from '../components/covidJumbotron/Worldwide';
import Safety from '../components/covidJumbotron/Safety';
import A from '../components/covidJumbotron/A';
import Slide from '../components/Slide';

// header가 고정(자리차지x)이라 별도의 마진


const MainForm = () => {
  
    return (
        <Container>
             
            <MainFormTopMarginStyle>
                <Br2/>
                {/* <Slide /> */}
                <Row>
                    <JumbotronStyle>
                        <Korea/>
                    </JumbotronStyle>
                </Row>
            </MainFormTopMarginStyle>
           
        </Container>

        
    );
};

export default MainForm;