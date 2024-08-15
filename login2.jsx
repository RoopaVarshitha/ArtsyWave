import React from "react";
//import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;
    //creating new sanity document fo rthe user to store his details in the db
    const doc = {
      _id: googleId,
      //for sqaqnity to know that we are updating the user coloumn
      _type: "user",
      userName: name,
      image: imageUrl,
      //contains the feilds that we specified for our sanity user schema
    };
    //creates new documents if it doesnt exist in the database
    client
      .createIfNotExists(doc)
      //specifying  what sgonna happen after creating a user
      .then(() => {
        navigate("/", { replace: true });
      });
  };
  return (
    <div className="flex justify-star items-center flex-col h-screen ">
      <div className="relative w-full h-full ">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div>
            <GoogleOAuthProvider clientId="475751958743-nj2enf2iv23iu6hhkovpsnk9iphm12g7.apps.googleusercontent.com">
              <GoogleLogin
                className="bg-mainColor flex justify-center items-center p-3 rounder-lg cursor-pointer outline-none"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
          
                <div className="shadow-2xl">
                  <GoogleLogin
                  clientId={`${process.enc.REACT_APP_GOOGLE_API_TOKEN}`}
                  render={(renderProps)=>(
                    <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounder-lg cursor-pointer outline-none"
                    onClick={renderProps.conClick}
                    disabled={renderProps.disabled}>
                      <FcGoogle className="mr-4"/> sign in with Google

                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host"
                  />

                </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
