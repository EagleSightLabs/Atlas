import dbConnect from '@/utils/dbConnect';
import Setting from '@/models/Setting';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const deletedSetting = await Setting.deleteOne({ _id: id });
    if (!deletedSetting) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
