import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import TakePhoto from "../components/icons/images/take-photo.png";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";
import WebSocketClient from "./WebSocketClient"; // Importe a classe WebSocketClient

export default function QrCode() {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const webSocketClient = new WebSocketClient(); // Inicialize a instância do WebSocketClient aqui

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 'max-content',
        height: 'max-content',
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      console.log('result é ' + result);

      const data = {
        qrCodeData: result,
      };

      const jsonStr = JSON.stringify(data);

      console.log(jsonStr);

      // Envie os dados para o servidor WebSocket
      webSocketClient.sendQRCodeData(jsonStr); // Enviar os dados usando a instância do WebSocketClient
    }

    function error(err) {
      console.warn(err);
    }
  
  }, []);

  return (
    <Layout>
      <div className="text-text"
      // className='flex flex-col h-full justify-center bg-second'
      >
        {/* <div className='flex items-end justify-center h-1/2 '>
          <span className="text-text text-xl font-semibold tracking-wide">
            Leitor de pedidos QRCode
          </span>
        </div> */}
        {scanResult
          ? <div>success <a href={"http://" + scanResult}></a></div>
          : <div id="reader"></div>
        }


        {/* <div className='flex items-center justify-center  h-fit '>
          <Image src={TakePhoto} alt="Pessoa tirando foto" height={550} width={550} />
        </div>

        <div className='flex items-center justify-center  h-1/2 '>
          <button className='flex items-center justify-center h-14 w-96 rounded-full bg-primary'>
            Escanear pedido
          </button>
        </div> */}


      </div>
    </Layout>
  )
};