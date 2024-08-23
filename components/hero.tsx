import { FaServer } from 'react-icons/fa';
import { SiMisskey, SiProxmox, SiNextdotjs, SiReact } from 'react-icons/si';
import Wave from 'react-wavify';
import Im from './im';

export default function Hero() {
  return (
    <div className="flex items-start justify-start w-full p-8 bg-white text-gray-600 h-screen relative overflow-hidden">
      {/* 左寄りかつ全体的に上に配置 */}
      <div className="flex flex-col items-start w-1/2 z-10" style={{ marginTop: '100px' }}>
        <Im />
      </div>
      {/* 画面右にプロフィールのウィジェットを縦に2行に配置 */}
      <div className="flex flex-col space-y-4 mt-8 z-10">
        <div className="flex space-x-4">
          <div className="w-48 h-48 rounded-lg bg-gray-200 p-4 flex items-center justify-center hover:transform hover:rotate-6 transition-transform duration-300 shadow-lg">
            <FaServer className="text-6xl text-gray-600" />
            <p className="text-lg font-semibold ml-4">Home Server</p>
          </div>
          <div className="w-48 h-48 rounded-lg bg-gray-200 p-4 flex items-center justify-center hover:transform hover:rotate-6 transition-transform duration-300 shadow-lg">
            <SiMisskey className="text-6xl text-gray-600" />
            <p className="text-lg font-semibold ml-4">Misskey</p>
          </div>
          <div className="w-48 h-48 rounded-lg bg-gray-200 p-4 flex items-center justify-center hover:transform hover:rotate-6 transition-transform duration-300 shadow-lg">
            <SiProxmox className="text-6xl text-gray-600" />
            <p className="text-lg font-semibold ml-4">ProxmoxVE</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-48 h-48 rounded-lg bg-gray-200 p-4 flex items-center justify-center hover:transform hover:rotate-6 transition-transform duration-300 shadow-lg">
            <SiNextdotjs className="text-6xl text-gray-600" />
            <p className="text-lg font-semibold ml-4">Next.js</p>
          </div>
          <div className="w-48 h-48 rounded-lg bg-gray-200 p-4 flex items-center justify-center hover:transform hover:rotate-6 transition-transform duration-300 shadow-lg">
            <SiReact className="text-6xl text-gray-600" />
            <p className="text-lg font-semibold ml-4">React</p>
          </div>
        </div>
      </div>
      {/* 背景に波のアニメーションを追加 */}
      <div className="absolute bottom-0 left-0 w-full" style={{ marginBottom: '-20px' }}>
        <Wave 
          fill='#f3f4f6'
          paused={false}
          options={{
          height: 0.1,
          amplitude: 40,
          speed: 0.15,
          points: 4
         }}
        />
      </div>

    </div>
  );
}
