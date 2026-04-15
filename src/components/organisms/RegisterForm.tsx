import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "../../schemas/registerSchema"; 
import { Input } from "../atoms/Input";
import { PasswordInput } from "../atoms/PasswordInput"; // Tambahkan ini
import { Select } from "../atoms/Select";               // Tambahkan ini
import { Textarea } from "../atoms/TextArea";       // Tambahkan ini
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export default function RegisterForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange"
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("DATA DITERIMA:", data);
    alert("Registrasi Berhasil! Silahkan Ikuti Dengan Baik.");
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-100 my-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Registrasi Event Teknologi</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Nama */}
        <FormField label="Nama Lengkap" error={errors.name?.message}>
          <Input register={register("name")} placeholder="Masukkan nama Anda" />
        </FormField>

        {/* Email */}
        <FormField label="Alamat Email" error={errors.email?.message}>
          <Input register={register("email")} type="email" placeholder="email@contoh.com" />
        </FormField>

        {/* Password (Field Baru) */}
        <FormField label="Password" error={errors.password?.message}>
          <PasswordInput register={register("password")} />
        </FormField>

        {/* Kategori Event (Field Baru) */}
        <FormField label="Kategori Event" error={errors.event?.message}>
          <Select 
            register={register("event")} 
            options={[
              { label: "IT Seminar", value: "seminar" },
              { label: "IT Workshop", value: "workshop" },
              { label: "IT Talkshow", value: "talkshow" },
            ]} 
          />
        </FormField>

        {/* Bio Singkat (Field Baru) */}
        <FormField label="Bio Singkat" error={errors.bio?.message}>
          <Textarea register={register("bio")} placeholder="Ceritakan motivasi kamu mengikuti event ini..." />
        </FormField>

        <Button type="submit" label="Daftar Sekarang" />
      </form>
    </div>
  );
}