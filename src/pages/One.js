import React from 'react'
import { Button, Image } from 'react-bootstrap'
const One = () => {
    return (
        <div>
            <h1 className="h11">Contact</h1>
            <Image src="http://srcsaudi.com/wp-content/uploads/2020/08/contact-us.jpg" fluid />
            <br />
            <div className="add">
                <Button href='/Home' variant="primary" size="lg" active>
                    Home
                </Button>{' '}
                <Button href='/Two' variant="secondary" size="lg" active>
                    About Us
                </Button>
            </div>

        </div>
    )
}

export default One
