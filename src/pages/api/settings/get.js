import dbConnect from '@/utils/dbConnect';
import Setting from '@/models/Setting';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const settings = await Setting.find({});
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
