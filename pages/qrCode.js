import Image from "next/image";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import TakePhoto from "../components/icons/images/take-photo.png";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";
import socket from "./WebSocketClient"; // Importe o cliente WebSocket

export default function QrCode() {

  const [scanResult, setScanResult] = useState(null);
  const [idFromWebSocket, setIdFromWebSocket] = useState(null);
  
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 'max-content',
        height: 'max-content',
      },
      fps: 5,
    });
    scanner.render(success);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      console.log('result é ' + result);

      const data = {
        qrCodeData: result,
      };
      const jsonStr = JSON.stringify(data);
      console.log(jsonStr);
      socket.emit("send", data);
    }
    socket.on("message", (data) => {
      console.log("Dados recebidos do servidor:", data);
      // Faça o que for necessário com os dados recebidos do servidor
    });
    return () => {
      socket.disconnect(); // Desconectar o socket ao desmontar o componente
    };
  }, []);

  return (
    <Layout>
      <div className="text-text">
        {scanResult
          ? <div>success <a href={"http://" + scanResult}>{scanResult}</a></div>
          : <div id="reader"></div>
        }
      </div>
    </Layout>
  )
};