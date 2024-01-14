import React, { useState } from 'react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import Header from '../../components/header';
import styles from '../../styles/pdfs.module.css';

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
      <div className='container mt-5' id={styles.editPdf}>
        <div className="input-group">
          <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleFileChange}/>
        </div>
        <div>
          <label>Texto del Usuario:</label>
        </div>
        {pdf && <iframe title="PDF Viewer" src={pdf} width="65%" height="400" />}
          <div>
              <div id={styles.commentsSection} className="input-group">
                <span className="input-group-text">Ingrese los comentarios</span>
                <textarea id={styles.comments} className="form-control" aria-label="With textarea" value={comentarios} onChange={handleCommentsChange}></textarea>
              </div>
              <button onClick={handleAddTextToPdf} id={styles.addComs}>Agregar Texto al PDF</button>
          </div>
      </div>
  </div>
    
  );
};

export default pdfs;

