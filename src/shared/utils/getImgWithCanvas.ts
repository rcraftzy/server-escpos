import { createCanvas, loadImage } from "@napi-rs/canvas";
import path from "node:path";
import { base64toImg } from "./base64toImage.ts";

const currentPath = process.cwd();

export interface Sketch {
  mode: string
  path: Path[]
}
export interface Props {
  sketch: Sketch[]
}

interface Path {
  y: number
  x: number
  lineWidth: number
  penColor: string
}

export const generateImgWithCanvas = ({ sketch = [] }: Props) => {
  const customPromise = new Promise((resolve, reject) => {
    const canvas = createCanvas(300, 241);
    const ctx = canvas.getContext("2d");
    if (sketch.length > 0) {
      sketch.map(({ mode, path }) => {
        if (mode === "rectangle") {
          ctx.lineWidth = path[0]?.lineWidth;
          ctx.strokeStyle = "#000000";
          const width = path[0]?.x - path[1]?.x;
          const height = path[0]?.y - path[1]?.y;
          ctx.strokeRect(path[1]?.x, path[1]?.y, width, height);
        } else if (mode === "draw") {
          ctx.lineWidth = path[0]?.lineWidth;
          ctx.strokeStyle = "#000000";
          ctx.beginPath();
          for (let i = 1; i < path.length; i++) {
            ctx.lineTo(path[i]?.x, path[i]?.y);
          }
          ctx.stroke();
        } else if (mode === "polygon") {
          ctx.lineWidth = path[0]?.lineWidth;
          ctx.strokeStyle = "#000000";
          ctx.beginPath();
          ctx.moveTo(path[0]?.x, path[0]?.y);
          for (let i = 1; i < path.length; i++) {
            if (i === path.length - 1) {
              ctx.closePath();
            } else {
              ctx.lineTo(path[i]?.x, path[i]?.y);
            }
          }
          ctx.stroke();
        } else if (mode === "circle") {
          const width = path[0]?.x - path[1]?.x;
          const height = path[0]?.y - path[1]?.y;
          ctx.lineWidth = path[0]?.lineWidth;
          ctx.strokeStyle = "#000000";
          ctx.beginPath();
          ctx.arc(
            path[0]?.x,
            path[0]?.y,
            Math.sqrt(width ** 2 + height ** 2),
            0,
            Math.PI * 2
          );
          ctx.stroke();
        } else if (mode === "stroke") {
          const width = path[0]?.x - path[1]?.x;
          const height = path[0]?.y - path[1]?.y;
          ctx.lineWidth = path[0]?.lineWidth;
          ctx.strokeStyle = "#000000";
          ctx.moveTo(path[0]?.x, path[0]?.y);
          ctx.lineTo(path[1]?.x, path[1]?.y);
          ctx.moveTo(path[0]?.x - width, path[0]?.y);
          ctx.lineTo(path[0]?.x, path[0]?.y - height);
          ctx.stroke();
        }
      });
    }
    loadImage(path.join(currentPath, "public/iphone.png"))
      .then((image) => {
        ctx.drawImage(image, 0, 0, 300, 241);
        base64toImg({ base64Img: canvas.toDataURL() });
        resolve(true);
      })
      .catch((err) => {
        console.log("error: ", err);
        reject(false);
      });
  });
  return customPromise;
};
