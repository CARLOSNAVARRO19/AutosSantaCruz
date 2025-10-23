import { Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const routes = (
	<>
		<Route path="/" element={<Layout />}></Route>
		<Route path="*" element={<h1 className="text-3xl font-bold underline">404 Not Found</h1>} />
	</>
);

export default routes;
