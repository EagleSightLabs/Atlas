import dbConnect from '@/utils/dbConnect';
import Setting from '@/models/Setting';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const setting = await Setting.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!setting) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: setting });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
