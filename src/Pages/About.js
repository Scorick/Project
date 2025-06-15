import React, {Component} from 'react'
import { Container,Tab,Nav,Row,Col, TabContent, TabPane } from 'react-bootstrap'
import Vik from './img/vik.jpg'
import Val from './img/val.jpg'
import Aleks from './img/aleks.jpg'
import Vit from './img/vit.jpg'
import Sof from './img/sof.jpg'

export default class About extends Component{
    render() {
const blackNavLinkStyle = {
      color: 'white',       // Цвет текста
      backgroundColor: 'grey', // Цвет фона
      borderRadius: '25px'
    };
    //  стили для текста в TabPane
    const tabPaneTextStyle = {
        fontSize: '25px',      // Размер шрифта
        fontFamily: 'Arial',   // Шрифт
        color: 'black'        // Цвет текста
    };

return(
    <Container >
    <Tab.Container id="left-tabs-example" defaultActiveKey="first"  >
        <Row>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2" >
<Nav.Item>
    <Nav.Link eventKey="first" style={blackNavLinkStyle}  >Программист</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="second" style={blackNavLinkStyle}>Дизайнер</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="third" style={blackNavLinkStyle}>Технический писатель</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="fourth" style={blackNavLinkStyle}>Тестировщик</Nav.Link>
</Nav.Item>
<Nav.Item>
    <Nav.Link eventKey="fifth" style={blackNavLinkStyle}>Верстальщик</Nav.Link>
</Nav.Item>
            </Nav>
            </Col>
            <Col sm={9}>
            <TabContent>
                <TabPane eventKey="first">
                    <img 
                        src={Vik} //  "путь_к_вашему_изображению.jpg" 
                        alt="Виктория Ковалева" //  описание изображения для 
                        style={{ maxWidth: '50%' }} //  максимальную ширину изображения
                    />
                
<p style={tabPaneTextStyle}>
    Ковалева Виктория Сергеевна 
Академия психологии и педагогики, направление "Психолого-педагогическое образование"
</p>
                </TabPane>
                <TabPane eventKey="second">
                    <img 
                        src={Val} 
                        alt="Ольхова Валерия" 
                        style={{ maxWidth: '50%' }} 
                    />
<p style={tabPaneTextStyle}>
    Ольхова Валерия Анатольевна,
Факультет психологии (АПИП 37.03.01- “Психология")
</p>
                </TabPane>
                <TabPane eventKey="third" >
                    <img 
                        src={Sof} 
                        alt="Лангенбах София" 
                        style={{ maxWidth: '50%' }} 
                    />

<p style={tabPaneTextStyle}> 
    Лангенбах София Александровна 
Факультет психологии (АПИП 37.03.01- “Психология")

</p>
                </TabPane>
                <TabPane eventKey="fourth">
                    <img 
                        src={Vit} 
                        alt="Скорик Виталий" 
                        style={{ maxWidth: '50%' }} 
                    />

<p style={tabPaneTextStyle}>
    Скорик Виталий Олегович
Академия психологии и педагогики, направление "Психолого-педагогическое образование"

</p>
                </TabPane>
                <TabPane eventKey="fifth">
                    <img 
                        src={Aleks} 
                        alt="Солод Александр" 
                        style={{ maxWidth: '50%' }} 
                    />

<p style={tabPaneTextStyle}>
   Солод Александр Иванович
Институт истории и международных отношений, направление "Педагог истории и общества"
</p>
                </TabPane>
            </TabContent>
            </Col>
        </Row>

    </Tab.Container>
    </Container>
)
    }
}