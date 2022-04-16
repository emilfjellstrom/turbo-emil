import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useEffect } from "react";
import { AsciiEffect } from "three-stdlib";

export function AsciiRenderer({
  renderIndex = 1,
  characters = " .:-+*=%@#",
  ...options
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree();
  // Create effect
  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, options);
    effect.domElement.style.position = "absolute";
    effect.domElement.style.top = "0px";
    effect.domElement.style.left = "0px";
    effect.domElement.style.color =
      options.theme === "light" ? "#4aa9d0" : "#c32e2f";
    effect.domElement.style.backgroundColor =
      options.theme === "light" ? "#d4d4d4" : "#1c1c1c";
    effect.domElement.style.pointerEvents = "none";

    return effect;
  }, [characters, options.invert, options.theme]);

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.parentNode.appendChild(effect.domElement);
    return () => gl.domElement.parentNode.removeChild(effect.domElement);
  }, [effect]);

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height);
  }, [effect, size]);

  // Take over render-loop (that is what the index is for)
  useFrame(() => {
    effect.render(scene, camera);
  }, renderIndex);

  // This component returns nothing, it has no view, it is a purely logical
  return <></>;
}
