import { User } from "../models/user.js";
import { toCloudinaryImage } from "../utils/toCloudinaryImage.js";

export const handleUserLogin = async (req, res) => {
  try {
    const { name, image, sub } = req.body;

    if (!sub || !name || !image)
      return res.status(400).send("Missing Required Fields.");
    const imageURL = await toCloudinaryImage(image, "userImages");

    const user = await User.findOneAndUpdate(
      { sub },
      { name, image: imageURL },
      { new: true, upsert: true }
    );

    return res.status(200).json({ name: user.name, image: user.image });
  } catch {
    return res.status(500).json({ message : "User creation failed"});
  }
};
