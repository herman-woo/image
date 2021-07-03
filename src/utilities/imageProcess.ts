import sharp from 'sharp';
import { promises as fs } from 'fs';
const imageProcess = async (
  input: string,
  w: number,
  h: number,
  outputDir: string,
  outputFile:string
): Promise<string> => {
  try{
    await fs.readdir(outputDir)
    try {
      await sharp(input) //takes the target file path
        .resize(w, h) //takes the intended width and height
        .toFile(`${outputDir}${outputFile}`); //places it to the designated path
        return "Image Processed"
    } catch (error) {
      console.log('Sharp Could not process image', error);
      return "Unable to Process Input"
    }
  }catch(error){
    console.log("No output directory found",error)
    return "No output directory found"
  }
}

export default imageProcess;
