import { useEffect, useState } from "react";


type WindowDimmension = {
    width: number;
    height:number;
}


class Window{

    size: WindowDimmension;

    constructor(size:WindowDimmension){
        this.size = size;
    }

    isMobile():boolean {
        return this.size.width <= 640;
    }
}


const getWindow = () : Window => {
  const { innerWidth: width, innerHeight: height } = window;
  return new Window(
    {
        width,
        height
    }
  );
}

const useWindow = () : Window => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindow()
  );

  useEffect(() => {
    function handleResize() {
        setWindowDimensions(getWindow());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default useWindow;