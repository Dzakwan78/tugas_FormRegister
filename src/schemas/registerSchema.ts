import { z } from "zod";

// Skema validasi menggunakan Zod sesuai spesifikasi tugas mandiri
export const registerSchema = z.object({
  name: z.string().min(1, "Nama lengkap wajib diisi"), // Wajib ada
  email: z.string().email("Format email tidak valid"), // Validasi email
  password: z.string().min(8, "Password minimal 8 karakter"), // Min. 8 karakter
  event: z.string().min(1, "Silakan pilih kategori event"), // Pilihan kategori
  bio: z.string().min(10, "Bio minimal 10 karakter"), // Validasi bio
});

// Mengambil tipe data (type inference) untuk digunakan di komponen Form
export type RegisterFormData = z.infer<typeof registerSchema>;