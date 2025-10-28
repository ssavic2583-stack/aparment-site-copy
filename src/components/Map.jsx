import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from "framer-motion";
import { useTheme } from '../context/ThemeContext'; 

mapboxgl.accessToken = 'pk.eyJ1IjoidXJvc21sZyIsImEiOiJjbWg2cjhmYmowbzh6MmtzYm53MGM3OTBiIn0.0sTvucPopQMs2cVYhbHTbg';

const LIGHT_STYLE = 'mapbox://styles/urosmlg/cmh8e1r8n007201s42m0l2erc';
const CENTER = [19.8914, 44.27175];

export default function Map() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: LIGHT_STYLE,
      center: CENTER,
      zoom: 16,
    });

    new mapboxgl.Marker().setLngLat(CENTER).addTo(map);

    map.on('load', () => map.resize());

    mapRef.current = map;
    return () => map.remove();
  }, []); // run only once

  return (
    <motion.section
      // No key={theme}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-stone-200 dark:bg-zinc-800 py-50"
      id="Location"
      onAnimationComplete={() => mapRef.current?.resize()}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden transition-colors duration-300">
          <h2 className="force-color text-3xl font-luxury font-bold text-center pt-8">
            Our Location
          </h2>
          {/* No key={theme} here either */}
          <div className="mt-8 h-[500px] w-full rounded-b-2xl overflow-hidden border border-gray-200">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
