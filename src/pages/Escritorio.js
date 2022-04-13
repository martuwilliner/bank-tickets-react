import React, {useState} from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';
import { Navigate,useNavigate} from 'react-router-dom';



const { Title, Text } = Typography;

export const Escritorio = () => {

  useHideMenu(false);
  const [usuario] = useState(getUserStorage());
  const navigate = useNavigate();
  
  const salir = () => {
    localStorage.clear();
    navigate('/ingresar');

  }

  const siguienteTicket = () => {
    console.log('Siguiente ticket');
  }


  if(!usuario.agente || !usuario.escritorio){
    return <Navigate to='/ingresar'/>

  }


  return (
    <>
    <Row>
      <Col span={20}>
        <Title level={2}>{usuario.agente}</Title>
        <Text>Usted está en el: </Text>
        <Text strong type="success">Escritorio {usuario.escritorio}</Text>
      </Col>

      <Col span={4} align="right">
        <Button
        shape="round"
        type="danger"
        onClick={salir}
        >
          <CloseCircleOutlined />
          Salir
        </Button>

      </Col>
    </Row>

    <Divider/>

    <Row>
      <Col>
        <Text>Está atendiendo el ticket número: </Text>
        <Text strong type="danger" style={{fontSize: 30}}>45</Text>
      </Col>
    </Row>

    <Row>

      <Col offset={18} span={6} align="right">

        <Button
        onClick={siguienteTicket}
        shape="round"
        type="primary"

        >
          Siguiente Ticket
          <RightOutlined />
        </Button>

      </Col>

    </Row>

    </>
  )
}
