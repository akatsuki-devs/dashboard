import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';

export default function historicoDePedidos() {
function teste() {
    const qrCodeDataList = useSelector((state) => state.qrCode.qrCodesData);

    console.log(qrCodeDataList)
}
    return (
     // <><h1>teste</h1></>
        <div>
          {qrCodeDataList && qrCodeDataList.length > 0 ? (
            qrCodeDataList.map((qrData, index) => (
              <div key={index}>
                <h2>Pedido ID: {qrData.id}</h2>
                <p>Status: {qrData.status}</p>
                <p>Total: {qrData.total}</p>
                {/* Renderize outros detalhes do pedido conforme necessário */}
              </div>
            ))
          ) : (
            <p>Sem dados de QR Code disponíveis.</p>
          )}
        </div>
     
    );
  }
