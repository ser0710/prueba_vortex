import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import Header from '../../components/header';

const pdfs = () => {
  const [pdf, setPdf] = useState(null);
  const [comentarios, setComentarios] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file && file.type === 'application/pdf') {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const editedPdfBytes = await pdfDoc.save();
      const editedPdfBlob = new Blob([editedPdfBytes], { type: 'application/pdf' });
      setPdf(URL.createObjectURL(editedPdfBlob));
    }
  };

  const handleCommentsChange = (e) => {
    setComentarios(e.target.value);
  };

  const handleAddTextToPdf = async () => {
    if (pdf) {
      const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      const newPage = pdfDoc.addPage();
      const textWidth = 200;
      const textHeight = 50;
      const textX = 50;
      const textY = 500;

      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

      newPage.drawText(`Texto del usuario: ${comentarios}`, {
        x: textX,
        y: textY,
        font,
        color: rgb(0, 0, 0),
      });

      const editedPdfBytes = await pdfDoc.save();
      const editedPdfBlob = new Blob([editedPdfBytes], { type: 'application/pdf' });
      setPdf(URL.createObjectURL(editedPdfBlob));
    }
  };

  return (
    <div>
        <Header/>
        <div>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <div>
                <label>Texto del Usuario:</label>
                <input type="text" value={comentarios} onChange={handleCommentsChange} />
                <button onClick={handleAddTextToPdf}>Agregar Texto al PDF</button>
            </div>
            {pdf && <iframe title="PDF Viewer" src={pdf} width="600" height="400" />}
        </div>
    </div>
    
  );
};

export default pdfs;
