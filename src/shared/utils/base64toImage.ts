import {writeFileSync} from "node:fs"
import path from "node:path";

const currentPath = process.cwd();

export const base64toImg = ({ base64Img }) => {
  const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace("data:", "").replace(/^.+,/, "");
  const buffer = Buffer.from(getBase64StringFromDataURL(base64Img), "base64");
  writeFileSync(path.join(currentPath, "public/out.png"), buffer);
};
