import dbConnect from '@/utils/dbConnect';
import Application from '@/models/Application';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const application = await Application.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }).populate('categories');
    if (!application) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
