import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Jumbotron, Tabs, Tab, ButtonGroup, Dropdown, DropdownButton, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Br2 from '../../pages/constant/Br2';
import TitleH3TagStyle from '../../pages/constant/TitleH3TagStyle';
import CovidCountry from '../graph/CovidCountry';

const A = () => {
    return (
        <Jumbotron>
                <TitleH3TagStyle msg="우리 동네의 확진 소식을 받아보세요"></TitleH3TagStyle>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
              </Jumbotron>
    );
};

export default A;