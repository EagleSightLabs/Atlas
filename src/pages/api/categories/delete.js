import dbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const deletedCategory = await Category.deleteOne({ _id: id });
    if (!deletedCategory) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
