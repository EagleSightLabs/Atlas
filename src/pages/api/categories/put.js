import dbConnect from '@/utils/dbConnect';
import Category from '@/models/Category';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
