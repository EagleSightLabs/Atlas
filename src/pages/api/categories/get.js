import dbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const categories = await Category.find({});
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
