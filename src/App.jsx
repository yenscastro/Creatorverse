import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="creator/:id" element={<ViewCreator />} />
        <Route path="creator/:id/edit" element={<EditCreator />} />
        <Route path="creator/new" element={<AddCreator />} />
      </Route>
    </Routes>
  );
}

export default App;