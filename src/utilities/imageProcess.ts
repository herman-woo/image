import sharp from 'sharp';

const imageProcess = async (
  input: string,
  w: number,
  h: number,
  output: string
): Promise<string> => {
  try {
    await sharp(input) //takes the target file path
      .resize(w, h) //takes the intended width and height
      .toFile(output); //places it to the designated path
      return "Image Processed"
  } catch (error) {
    console.log('Sharp Could not process image', error);
    return "Unable to Process Image"
  }
};

export default imageProcess;
