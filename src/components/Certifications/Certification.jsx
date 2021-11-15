import React, { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// using ES6 modules

import Title from '../Title/Title';
import samplePDF from './linkedInCert.pdf';

const Certification = () => {
  const [numPages, setNumPages] = useState(null);
  const [pdfWidth, setPdfWidth] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPdfWidth((document.getElementById('react-pdf-wrapper').clientWidth * 80) / 100);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <section id="projects">
      <Container id="react-pdf-wrapper">
        <Title title="Certifications" />
        <Row className="justify-content-md-center">
          <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess} width={100}>
            <Page pageNumber={pageNumber} width={pdfWidth}></Page>
          </Document>
        </Row>
        <Row className="justify-content-md-center">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="cta-btn cta-btn--hero"
          >
            Previous
          </button>
          <p className="mx-3">
            {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="cta-btn cta-btn--hero"
          >
            Next
          </button>
        </Row>
      </Container>
    </section>
  );
};

export default Certification;
