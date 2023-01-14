import login from "@/api/login";
import { Flex, Stack, Avatar, Heading,  InputGroup, InputLeftElement, Input, InputRightElement, Button, FormHelperText, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Signin: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()
    const handleLogin = async () => {
      let log = await login(email,password)
      console.log(log)
      if(log.ok){
        let res = await log.json()
        console.log("jo", res)
        if(res.user._id){
          router.push(`/user/${res.user._id}`)
        }
    }
    }



  return (
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
       
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
           
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
               
                />
                <Input type="email" color="gray.500" placeholder="email address" onChange={(e:any)=>{
                  setEmail(e.target.value)
                }} />
              </InputGroup>
            
           
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  
                />
                <Input color="gray.500"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password" onChange={(e:any)=>{
                    setPassword(e.target.value)
                  }}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem"  colorScheme={"linkedin"}  size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
             
                <Link href={""}>forgot password?</Link>
          
            
            <Button
              borderRadius={0}
             
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleLogin}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleLogin();
                }
                }
              }
            >
              Login
            </Button>
          </Stack>
        
      </Box>
    </Stack>
    <Box>
      New to us?{" "}
      <Link color="teal.500" href="signup">
        Sign Up
      </Link>
    </Box>
  </Flex>
  )
}

export default Signin;