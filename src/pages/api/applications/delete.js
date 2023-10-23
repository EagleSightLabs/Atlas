import dbConnect from '@/utils/dbConnect';
import Application from '@/models/Application';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  try {
    const deletedApplication = await Application.deleteOne({ _id: id });
    if (!deletedApplication) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
