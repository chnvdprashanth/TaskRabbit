import { jwtDecode } from "jwt-decode";

export const getUserDetails = (respone) => {
  try {
    const decode = jwtDecode(respone.credential);
    const { name, picture, sub } = decode;
    const user = {
      sub: sub,
      name: name,
      image: picture,
    };
    return user;
  } catch (err) {
    console.log("Failed to get user details.", err);
  }
};