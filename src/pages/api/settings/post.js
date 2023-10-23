import dbConnect from '@/utils/dbConnect';
import Setting from '@/models/Setting';

export default async function handler(req, res) {
  await dbConnect();

  try {
    const setting = await Setting.create(req.body);
    res.status(201).json({ success: true, data: setting });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
