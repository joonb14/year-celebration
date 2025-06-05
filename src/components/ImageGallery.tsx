import { Gallery, Item } from 'react-photoswipe-gallery';
import { Divider } from "antd";
import { styled } from "@stitches/react";
import 'photoswipe/dist/photoswipe.css';

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)", // Ensure this path is correct relative to your public folder or build output
  width: "100%",
  padding: "20px", // Added some padding for better visual spacing
  boxSizing: "border-box", // Include padding in the element's total width and height
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
  textAlign: "center", // Center the title for better aesthetics
});

const ImageGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Responsive grid
  gap: "10px", // Space between images
  justifyContent: "center", // Center grid items
});

const ThumbnailImage = styled("img", {
  width: "100%",
  height: "150px", // Fixed height for thumbnails
  objectFit: "cover", // Crop images to fit the container
  cursor: "pointer",
  borderRadius: "8px", // Slightly rounded corners for aesthetics
  transition: "transform 0.2s ease-in-out", // Smooth hover effect
  "&:hover": {
    transform: "scale(1.03)",
  },
});

const images = [
  { original: "./assets/1.jpg", thumbnail: "./assets/1.jpg", width: 1339, height: 893 },
  { original: "./assets/2.jpg", thumbnail: "./assets/2.jpg", width: 880, height: 1320 },
  { original: "./assets/3.jpg", thumbnail: "./assets/3.jpg", width: 1024, height: 1364 },
  { original: "./assets/4.jpg", thumbnail: "./assets/4.jpg", width: 977, height: 735 },
  { original: "./assets/5.jpg", thumbnail: "./assets/5.jpg", width: 1339, height: 893 },
  { original: "./assets/6.jpg", thumbnail: "./assets/6.jpg", width: 1050, height: 1400 },
  { original: "./assets/7.jpg", thumbnail: "./assets/7.jpg", width: 1050, height: 1400 },
  { original: "./assets/8.jpg", thumbnail: "./assets/8.jpg", width: 893, height: 1339 },
  { original: "./assets/9.jpg", thumbnail: "./assets/9.jpg", width: 1050, height: 1400 },
  { original: "./assets/10.jpg", thumbnail: "./assets/10.jpg", width: 1050, height: 1400 },
  { original: "./assets/11.jpg", thumbnail: "./assets/11.jpg", width: 1050, height: 1400 },
  { original: "./assets/12.jpg", thumbnail: "./assets/12.jpg", width: 1050, height: 1400 },
  { original: "./assets/13.jpg", thumbnail: "./assets/13.jpg", width: 907, height: 1613 },
  { original: "./assets/14.jpg", thumbnail: "./assets/14.jpg", width: 1050, height: 1400 },
  { original: "./assets/15.jpg", thumbnail: "./assets/15.jpg", width: 1050, height: 1400 },
  { original: "./assets/16.jpg", thumbnail: "./assets/16.jpg", width: 1050, height: 1400 },
  { original: "./assets/17.jpg", thumbnail: "./assets/17.jpg", width: 739, height: 1600 },
  { original: "./assets/18.jpg", thumbnail: "./assets/18.jpg", width: 739, height: 1600 },
  { original: "./assets/19.jpg", thumbnail: "./assets/19.jpg", width: 1411, height: 1058 },
  { original: "./assets/20.jpg", thumbnail: "./assets/20.jpg", width: 1050, height: 1400 },
];

export default function ImageGallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Gallery</Title>
      </Divider>
      <Gallery>
        <ImageGrid>
          {images.map((image, index) => (
            <Item
              key={index} // Add a unique key for each item in the map
              original={image.original}
              thumbnail={image.thumbnail}
              width={image.width} // Pass width and height from the image object
              height={image.height} // Pass width and height from the image object
            >
              {({ ref, open }) => (
                <ThumbnailImage
                  ref={ref}
                  onClick={open}
                  src={image.thumbnail} // Use the thumbnail path from your image object
                  alt={`Image ${index + 1}`} // Add alt text for accessibility
                />
              )}
            </Item>
          ))}
        </ImageGrid>
      </Gallery>
    </Wrapper>
  );
}