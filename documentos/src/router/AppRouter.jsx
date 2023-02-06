import { Route, Routes } from "react-router-dom";
import { KinRossLayout } from "../components/kinRoss/KinRossLayout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="checkList/:empresa/:id" element={<KinRossLayout />} />

      {/* <Route path='/*' element={ <Navigate to="register"/> } /> */}
    </Routes>
  );
};
