import CardForm from "../components/Card";
import mypic from "../components/images/group-image.svg";


import React, { useState } from "react";
import Input from "../components/CustomInput";
import Model from "../components/Model";
import { sendData,getData } from "../utils/api"
// import { setCookie } from "../../node_modules/cookies-next/lib/index";
// import { useRouter } from "../../node_modules/next/router";
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const router = useRouter()
  const [errorEmailOrPassword, setErrorEmailOrPassword] = useState(false)
  const [permition, setPermition] = useState<string>("");
  const [PermitionLogin, setPermitionLogin] = useState("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setErro("");
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setErro("");
  };

  const handleLogin = async () => {
    try {
      const data = await sendData("auth/signin", "POST", { email, password });
      //console.log(data);
      console.log(data)
      if (data.statusCode !== 201) {
        setErro(data.message);
        console.log('opa')
        setErrorEmailOrPassword(true)

      } else {
        setCookie("auth", data.message)

        console.log(data)
        localStorage.setItem('token', data.message);

        const local = localStorage.getItem('token');
        console.log('Token armazenado: ' + local);
        try {
          const login = await getData("auth/me", local);
          console.log(login.userType)

          if(login.userType === "COLABORATOR" ||login.userType ===  "ADMIN" ){
            router.push("/")
          }else{
            console.log('nao permitido')
            //setPermition("Nao permitido")
            setPermitionLogin("Nao permitido")
          }
          
        }
        catch (erro) {
          console.log(erro)
        }
        // router.push("/")
      }
    } catch (error) {
      setErro("Ocorreu um erro durante o login.");
    }
  };

  return (
    <Model image={{
      url:
        mypic,
      //'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' ,
      alt: "teste"
    }}
    >
      <CardForm
        title="Login"
        subtitle="Bem-vindo de volta!"
        onClick={handleLogin}
        buttonText="Login"
      >
        <Input
          data={email}
          onChange={handleEmailChange}
          text="Email"
          type="email"
        />
        <Input
          data={password}
          onChange={handlePasswordChange}
          text="Senha"
          type="password"
          forgotPassoword
        />
        {erro && (
          <p className="font-black text-red-500">{erro}</p>
        )}
                {PermitionLogin && (
          <p className="font-black text-red-500">{PermitionLogin}</p>
        )}


      </CardForm>
    </Model>
  );
}