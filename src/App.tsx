import RegisterForm from "./components/organisms/RegisterForm";

function App() {
  return (
    // Container utama dengan background abu-abu muda dan padding
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Memanggil Organism Form Registrasi */}
        <RegisterForm />
      </div>
    </div>
  );
}

export default App;