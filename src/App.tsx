import './App.css';
import ApplicantForm from './components/ApplicantForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-6xl bg-gray-50 p-5 rounded-lg shadow-lg">
        <h1>Application Form</h1>
        <ApplicantForm />
      </div>
    </div>
  );
}

export default App;
