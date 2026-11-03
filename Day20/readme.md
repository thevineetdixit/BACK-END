What is JWT token?
JWT is json web token which was introduced to solve the problem of reapeated login required to a server

// for ex : you once login into insta and then when you visit again you need to sign in again,so thats the issue here comes jwt token which is assigned to the user by server that avoid repeated login to server

jwt tokens need not to contain sensitive token
you can bypass any login if you have login jwt data of any other person 


JWT = header+ payload + digital signature 

PAYLOAD = have info about the user,one should not include critical info inside it 
digital signature = hashed and encrypted (head + payload info )
#server has a key which will encrypt the digital signature 
