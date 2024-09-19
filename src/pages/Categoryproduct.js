
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import '../styling/textoverflow.css'
import { addtocart } from '../rtk/slices/Cart-slice';

function Categoryproduct(props) {
const dispatch=useDispatch()
    return (
        <Col key={props.product.id} className='my-5 '>
            <Card style={{ width: '18rem' }} className='py-3 px-3'>
                <Card.Img variant="top" style={{ height: '250px' }} src={props.product.image} />
                <Card.Body>
                    <Card.Title className='limited-text'>{props.product.title}</Card.Title>
                    <Card.Text >
                        {props.product.price}$
                    </Card.Text>
                    <Button variant="primary" onClick={() => dispatch(addtocart(props.product))}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>


    )
}

export default Categoryproduct