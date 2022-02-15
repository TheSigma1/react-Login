import React from "react";
import{Body} from '../stiles/body.styled'
import { Container } from '../stiles/container.styled'
import { Tittle } from '../stiles/tittle.styled'
import{Text} from '../stiles/text.styled'
import { Username } from '../stiles/username.styled'
import { Password } from '../stiles/password.styled'
import {Button} from '../stiles/button.styled'


function Login() {
  return (
    <>
      <Body>
        <Container>
          <Tittle>
            <div>
            Welcome to The Space Verse</div>
          </Tittle>
          <Text>
              LogIn Here
          </Text>
          <Username>
            <p>Username</p>
            <input type='text' placeholder="Enter your Username"></input>
          </Username>
          <Password>
            <p> Password</p>
            <input type='password' placeholder="Enter your password" />
          </Password>
          <Button>
            <p>Log-In</p>
          </Button>
        </Container>
      </Body>
    </>
  );
}
export default Login