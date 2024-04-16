import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import QRCode from 'qrcode';

const QrCodeGeneractor = () => {
    const [qrCodeUrlPath, setQrCodeUrlPath] = useState("");
    const [qrCode, setQrCode] = useState(null);
    const [showQrCode, setShowQrCode] = useState(false);

    const handleChange = (e) => {
        setQrCodeUrlPath(e.target.value);
    }

    const toGenerateQrCode = () => {
        QRCode.toDataURL(qrCodeUrlPath)
            .then(qr => {
                setQrCode(qr);
                setShowQrCode(true);  // Set showQrCode to true when QR code is generated
                setQrCodeUrlPath(""); // Clear input field after generating QR code
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div className='row text-center'>
            <div className='col'></div>
            <div className='col-lg-6 mt-3'>
                <div className='text-success h3'>QR Code Generator</div>
                <div className='mt-3'>
                    <input 
                        type="text" 
                        className='form-control' 
                        name="qrCodeUrlPath" 
                        value={qrCodeUrlPath}
                        onChange={handleChange} 
                        placeholder='https://www.yourWebsite.com' 
                    />
                    <button 
                        className='btn btn-success mt-2 w-25' 
                        onClick={toGenerateQrCode}
                    >
                        Generate
                    </button>
                </div>
                <div className='mt-3'>
                    {showQrCode && qrCode && 
                        <img src={qrCode} alt="QR Code" width={300} height={300} />
                    }
                </div>
            </div>
            <div className='col'></div>
        </div>
    );
};

export default QrCodeGeneractor;
