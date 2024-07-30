import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <section className="shared-layout">
      <Outlet />
    </section>
  );
};
export default SharedLayout;
