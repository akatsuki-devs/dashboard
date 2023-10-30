class WebSocketClient {
    constructor(webSocketURL) {
      this.websocket = new WebSocket(webSocketURL || 'ws://localhost:9000/easy');
      this.messageHandlers = []; // Array de manipuladores de eventos
  
      this.websocket.addEventListener('open', () => {
        console.  log('Conexão WebSocket estabelecida');
      });
  
      this.websocket.addEventListener('message', (event) => {
       // console.log('Mensagem recebida do servidor:', data);
        // Chame os manipuladores de eventos registrados para mensagens recebidas
        this.messageHandlers.forEach((handler) => {
          handler(event.data);
        });
      });
  
      this.websocket.addEventListener('close', () => {
        console.log('Conexão WebSocket fechada');
      });
  
      this.websocket.addEventListener('error', (error) => {
        console.error('Erro na conexão WebSocket:', error);
      });
    }
  
    // Método para enviar dados para o servidor
    sendQRCodeData(data) {
      if (this.websocket.readyState === WebSocket.OPEN) {
        this.websocket.send(data);
        console.log('Dados enviados via WebSocket:', data);
      } else {
        console.error('A conexão WebSocket não está aberta. Dados não enviados.');
      }
    }
  
    // Método para registrar manipuladores de eventos para mensagens recebidas
    addMessageHandler(handler) {
      this.messageHandlers.push(handler);
    }
  
    // Método para remover um manipulador de eventos para mensagens recebidas
    removeMessageHandler(handler) {
      this.messageHandlers = this.messageHandlers.filter((h) => h !== handler);
    }
  }
  
  export default WebSocketClient;