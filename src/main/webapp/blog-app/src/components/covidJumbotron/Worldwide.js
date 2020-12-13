import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Jumbotron, Tabs, Tab, ButtonGroup, Dropdown, DropdownButton, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Br2 from '../../pages/constant/Br2';
import TitleH3TagStyle from '../../pages/constant/TitleH3TagStyle';
import CovidCountry from '../../pages/covid/CovidCountry';

const Worldwide = () => {
    return (<Jumbotron>
                <TitleH3TagStyle msg="국가별 통계를 비교해보세요"></TitleH3TagStyle>
               <CovidCountry></CovidCountry>
              </Jumbotron>
    );
};

export default Worldwide;