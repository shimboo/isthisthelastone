import React from 'react'
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
const Two = () => {
    return (
        <div className="App" >
            <h1 className="h11">About Us</h1>
            <Image src="https://www.bkacontent.com/wp-content/uploads/2020/06/about-us.jpg" fluid />
            <br />
            <div className="add">
                <Button href='/Home' variant="primary" size="lg" active>
                    Home
                </Button>{' '}
                <Button href='/One' variant="secondary" size="lg" active>
                    Contact
                </Button>
            </div>
        </div >
    )
}

export default Two
