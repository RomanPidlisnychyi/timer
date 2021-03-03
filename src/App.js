import Layout from './components/Layout/Layout';
import Timer from './components/Timer/Timer';
import ButtonControl from './components/ButtonControl/ButtonControl';

export default function App() {
  return (
    <Layout>
      <Timer />
      <ButtonControl />
    </Layout>
  );
}
