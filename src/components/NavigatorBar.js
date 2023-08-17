import { Navbar, Container, Nav } from 'react-bootstrap';
import "../style/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NavButton from './Button.js';
import { useState } from "react";

const NavigatorBar = ({ setSelectedCategory }) => {

    const list = [
        { id: 0, name: 'All' },
        { id: 1, name: 'Terbaru' },
        { id: 2, name: 'Promo' },
        { id: 3, name: 'Official Store' },
        { id: 4, name: 'Rekomendasi' }
    ];

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName, category) => {
        setActiveButton(buttonName);
        if (buttonName === 'All') {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <div>
            <Navbar className='container-fluid'>
                <Container fluid>
                    <Navbar.Brand style={{ color: '#04E413', fontFamily: 'Nunito Sans' }}>TokopediaPlay</Navbar.Brand>
                    <Nav className="ml-auto">

                        <FontAwesomeIcon icon={faSearch} style={{ color: '#fff', fontSize: '1rem', cursor: 'pointer' }} />
                    </Nav>
                </Container>
            </Navbar>
            <Navbar className='container-fluid'>
                <Container fluid>
                    <Nav className="ml-auto">
                        {
                            list.map(listed => {
                                return (
                                    <NavButton
                                        key={listed.id}
                                        name={listed.name}
                                        onClick={() => handleButtonClick(listed.name, listed.id)}
                                        isActive={activeButton === listed.name}
                                    />
                                );
                            })
                        }
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavigatorBar;