import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '1h' });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const signup = async (req, res) => {
  const { nik, firstName, lastName, telp, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    nik,
    name: `${firstName} ${lastName}`,
    telp,
    email,
    password: hashedPassword,
  });

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) return res.status(400).json({ message: 'User already exists' });

    const result = await newUser.save();

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '1h' });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });

    console.log(error);
  }
};
