import mongoose from 'mongoose';

const ComplaintSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    laporan: String,
    tanggapan: String,
    foto: String,
    tgl_pengaduan: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timmestamps: true,
  }
);

const Complaint = mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);
export default Complaint;
