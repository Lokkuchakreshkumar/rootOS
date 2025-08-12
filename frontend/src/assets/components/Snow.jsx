import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const Snow = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "snow",
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          color: { value: "#ffffff" },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value:4 ,
            random: true,
          },
        },
      }}
      className="absolute inset-0 z-10 pointer-events-none"
    />
  );
};

export default Snow;
