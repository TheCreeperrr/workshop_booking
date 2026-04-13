import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Activation from "./pages/Activation";
import WorkshopTypeList from "./pages/WorkshopTypeList";
import WorkshopTypeDetails from "./pages/WorkshopTypeDetails";
import AddWorkshopType from "./pages/AddWorkshopType";
import EditWorkshopType from "./pages/EditWorkshopType";
import ProposeWorkshop from "./pages/ProposeWorkshop";
import WorkshopDetails from "./pages/WorkshopDetails";
import WorkshopStatistics from "./pages/WorkshopStatistics";
import WorkshopStatusCoordinator from "./pages/WorkshopStatusCoordinator";
import WorkshopStatusInstructor from "./pages/WorkshopStatusInstructor";
import ViewProfile from "./pages/ViewProfile";
import EditProfile from "./pages/EditProfile";

const mockUser = {
  isAuthenticated: true,
  isInstructor: false,
  fullName: "Jane Doe",
};

function App() {
  return (
    <Router>
      <Navbar user={mockUser} />
      {/* pt-12 matches navbar h-12 so content is never hidden behind it */}
      <main className="pt-12 min-h-screen">
        <Routes>
          <Route path="/" element={<WorkshopTypeList user={mockUser} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/activation" element={<Activation status="pending" />} />
          <Route path="/workshop-types" element={<WorkshopTypeList user={mockUser} />} />
          <Route path="/workshop-types/:id" element={<WorkshopTypeDetails />} />
          <Route path="/workshop-types/add" element={<AddWorkshopType />} />
          <Route path="/workshop-types/:id/edit" element={<EditWorkshopType />} />
          <Route path="/propose-workshop" element={<ProposeWorkshop />} />
          <Route path="/workshop/:id" element={<WorkshopDetails user={mockUser} />} />
          <Route path="/workshop-status" element={<WorkshopStatusCoordinator user={mockUser} />} />
          <Route path="/statistics" element={<WorkshopStatistics />} />
          <Route path="/workshop-status/instructor" element={<WorkshopStatusInstructor user={mockUser} />} />
          <Route path="/profile" element={<ViewProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;