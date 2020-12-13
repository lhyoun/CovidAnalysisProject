import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Jumbotron, Tabs, Tab, ButtonGroup, Dropdown, DropdownButton, Spinner, Form, Button, Table, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Br2 from '../../pages/constant/Br2';
import TitleH3TagStyle from '../../pages/constant/TitleH3TagStyle';
import CovidCountry from '../../pages/covid/CovidCountry';

const Safety = () => {
    const inputHandle = (e) => {
        setSearch_region(e.target.value);
      };
      const [region, setRegion] = useState('busan');
      const [search_region, setSearch_region] = useState('');
    return (
        <Jumbotron>
                <TitleH3TagStyle msg="지금 가려고 하는 곳이 얼마나 안전한지 확인해 보세요"></TitleH3TagStyle>
               
                <Br2/>

                <Form inline>
                  <Form.Control
                    className="mr-sm-2"
										type="text"
										name="search_region"
										placeholder="Enter to locate"
										onChange={inputHandle}
										value={search_region} />
                  <Button onClick={function(){alert("complete. search about '" + search_region + "'")}} variant="outline-primary">Search</Button>
                </Form>
        </Jumbotron>
    );
};

export default Safety;