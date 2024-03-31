import QRCode from 'qrcode';

const generateQrCode = async (text: string) => {
  try {
    return await QRCode.toDataURL(
        text,
        {
            margin: 2,
            width: 400,
        }
    );
  } catch (err) {
    console.error(err)
  }
}

export default generateQrCode;