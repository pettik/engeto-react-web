import { Outlet } from 'react-router-dom';
import './SharedLayout.css';

const SharedLayout = () => {
  return (
    <section className="shared-layout">
      <Outlet />
    </section>
  );
};
export default SharedLayout;
