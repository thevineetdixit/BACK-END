What is JWT token?
JWT is json web token which was introduced to solve the problem of reapeated login required to a server

// for ex : you once login into insta and then when you visit again you need to sign in again,so thats the issue here comes jwt token which is assigned to the user by server that avoid repeated login to server

jwt tokens need not to contain sensitive token
you can bypass any login if you have login jwt data of any other person 


JWT = header+ payload + digital signature 
password ya sensitive kabhi jwt ka part nhi hota h 

header = its not encrypted,have info about the algo and type 

PAYLOAD = have info about the user,one should not include critical info inside it 

digital signature = hashed and encrypted (head + payload info )
#server has a key which will encrypt the digital signature 

*header and payload are not hashed,they are just in hexadecimal form

Hashcode is only one way,reverse is not possible while encrypt and decrypt is reversible,we just need keys 

*hashcode is not rev because if the reverse is possible than it is great compression technique but its not rev,
and multiple pass can have same hashcode but this happens rarely,so less the hash colln ,better the hashing,
hackers can even use an other pass to login instead of your orig pass if the original and other pass have same hash value

//we can always define the expiry date of token,if not it will always be valid 

// Refresh Token = 
