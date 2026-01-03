import { experimental_generateImage } from "ai";
import { createDocumentHandler } from "@/lib/artifacts/server";
import { getImageModel } from "@/lib/ai/providers";

export const imageDocumentHandler = createDocumentHandler<"image">({
  kind: "image",
  onCreateDocument: async ({ title, dataStream }) => {
    let imageBase64 = "";

    try {
      const { image } = await experimental_generateImage({
        model: getImageModel(),
        prompt: title,
        size: "1024x1024",
      });

      // Convert image to base64
      if (image.base64) {
        imageBase64 = image.base64;
      } else if (image.uint8Array) {
        // Convert Uint8Array to base64
        const buffer = Buffer.from(image.uint8Array);
        imageBase64 = buffer.toString("base64");
      }

      // Stream the base64 image data
      dataStream.write({
        type: "data-imageDelta",
        data: imageBase64,
        transient: true,
      });
    } catch (error) {
      console.error("Image generation failed:", error);
      throw new Error(
        `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }

    return imageBase64;
  },
  onUpdateDocument: async ({ document, description, dataStream }) => {
    let imageBase64 = "";

    try {
      // For image updates, regenerate with the description
      const { image } = await experimental_generateImage({
        model: getImageModel(),
        prompt: description,
        size: "1024x1024",
      });

      // Convert image to base64
      if (image.base64) {
        imageBase64 = image.base64;
      } else if (image.uint8Array) {
        // Convert Uint8Array to base64
        const buffer = Buffer.from(image.uint8Array);
        imageBase64 = buffer.toString("base64");
      }

      // Stream the base64 image data
      dataStream.write({
        type: "data-imageDelta",
        data: imageBase64,
        transient: true,
      });
    } catch (error) {
      console.error("Image update failed:", error);
      throw new Error(
        `Failed to update image: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }

    return imageBase64;
  },
});

