//import CardForm from "@/components/Card";
import CardForm from "../components/Card";
import React, { useState } from 'react';
import Input from "../components/CustomInput";
import Model from "../components/Model";
import third from "../components/images/third.svg";
import { sendData,getData } from "../utils/api"

export default function ResetPassword() {
    const [email, setEmail] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [erro, setErro] = useState<string>("");

    const handleSubmitEmail = (email: string) => {
        setEmail(email);
    }

    const sendEmail = async () => {
        if (!email) {
            setErro("Por favor, preencha o campo de email");
            setInfo("")
            return;
        }
        
        const data = await sendData("forgot-password", "POST", { email });

        if (data.statusCode === 201) {
            setInfo(data.message);
        }else{
            setErro(data.message)
        }
    }

    return (
        <Model image={{ url: third, alt: "redefinir-senha",
         //height: 200, width: 300 
         }}>
            <CardForm
                title="Redefinir Senha"
                subtitle="Esqueceu sua senha?"
                buttonText="Enviar"
                onClick={sendEmail}>
                <Input
                    data={email}
                    type="email"
                    onChange={handleSubmitEmail}
                    text="Email"
                    />
                {info && <p className="text-zinc-800 font-medium text-sm">{info}</p>}
                {erro && <p className="font-black text-red-500 text-sm">{erro}</p>}
            </CardForm>
        </Model>
    )
}