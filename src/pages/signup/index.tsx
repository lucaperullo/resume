import signup from "@/api/signup";
import { Flex, Stack, Avatar, Heading, FormControl, InputGroup, InputLeftElement, Input, InputRightElement, Button, FormHelperText, Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';


const Signup: NextPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const router = useRouter()
    const handleSignup = async () => {
    
    let registered = await signup(email,password,name,surname)
    if(registered.ok){
     
        router.push('/signin')
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
          
            boxShadow="md"
          >
            
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
               
                />
                <Input bg="white" color="black" type="text"  placeholder="name" onChange={(e)=>{
                    setName(e.target.value)
                }} />
              </InputGroup>
            
           
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
               
                />
                <Input bg="white" color="black" type="text"  placeholder="surname" onChange={(e)=>{
                    setSurname(e.target.value)
                }} />
              </InputGroup>
            
           
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
               
                />
                <Input bg="white" color="black" type="email"  placeholder="email address" onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
              </InputGroup>
            
            
           
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  
                />
                <Input bg="white" color="black" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
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
              onClick={handleSignup}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSignup();
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
      Already in?{" "}
      <Link color="teal.500" href="signin">
        Sign In
      </Link>
    </Box>
  </Flex>
  )
}

export default Signup;