import { Box, Button } from "@chakra-ui/react";
import Header from "@components/Header";
import { Document, Page, pdfjs } from 'react-pdf';
import { useTheme } from '../contexts/ThemeContext';
import 'react-pdf/dist/Page/TextLayer.css';
// import 'react-pdf/dist/Page/AnnotationLayer.css';

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// const styles = StyleSheet.create({
//   page: { backgroundColor: 'tomato' },
//   section: { color: 'white', textAlign: 'center', margin: 30 }
// });

function Resume() {
  const { appearance } = useTheme();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Harrison-Surma-Resume.pdf';
    link.download = 'Harrison-Surma-Resume.pdf';
    link.click();
  };

  return (
    <Box
      bg={appearance === 'dark' ? 'gray.800' : 'white'}
      p={8}
      fontFamily="Arial, sans-serif"
      color={appearance === 'dark' ? 'white' : 'gray.700'}
      width="100%"
    >
      <Header />
      <Button onClick={downloadResume} mb={4}>
        Download Resume
      </Button>
      <Document
        file="/Harrison-Surma-Resume.pdf"
        onLoadError={console.error}
        onSourceError={console.error}
      >
        <Page
          pageNumber={1}
          width={window.innerWidth - 64} // Subtract padding (32px * 2)
          renderTextLayer={false}
          customTextRenderer={({ str }) => (
            "<mark>{str}</mark>"
          )}
        />
      </Document>
    </Box>
  );
}

export default Resume;