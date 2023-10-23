import dbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
