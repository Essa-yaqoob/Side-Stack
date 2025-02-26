import jwt from "jsonwebtoken"

const generateJwt = (id) => {
    try {
        const token = jwt.sign({id}, process.env.JWT_SCERET_KEY)
        return token;
    } catch (error) {
        console.log(`Error while generating jwt Token : ${error}`)
    }
}

const verifyJwt = (token ) => {
    try {
        return decodedToken = jwt.verify(token, process.env.JWT_SCERET_KEY)
    } catch (error) {
        console.log(`Error while verifying jwt token : ${token}`)
        return false;
    }
}

export { generateJwt }