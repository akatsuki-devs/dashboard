class WebSocketClient {
  constructor(webSocketURL) {
    this.websocket = new WebSocket(webSocketURL || 'ws://localhost:9000/easy');

    this.websocket.addEventListener('open', () => {
      console.log('Conexão WebSocket estabelecida');
    });

    this.websocket.addEventListener('close', () => {
      console.log('Conexão WebSocket fechada');
    });

    this.websocket.addEventListener('error', (error) => {
      console.error('Erro na conexão WebSocket:', error);
    });

  }

  sendQRCodeData(data) {
    if (this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(data);
      console.log('Dados enviados via WebSocket:', data);
    } else {
      console.error('A conexão WebSocket não está aberta. Dados não enviados.');
    }
  }

}

export default WebSocketClient;
