import "./Obstacles.css";
import obstacle1 from "../../../assets/img/gif/deadline.gif";
import obstacle2 from "../../../assets/img/gif/code.gif";
import obstacle3 from "../../../assets/img/gif/error.gif";
import { useRef, useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  obstacle1Height,
  obstacle1Left,
  obstacle1Top,
  obstacle1Width,
  obstacle2Height,
  obstacle2Left,
  obstacle2Top,
  obstacle2Width,
  obstacle3Height,
  obstacle3Left,
  obstacle3Top,
  obstacle3Width,
} from "../../../config/redux/obstacleSlice";
import { setSpeed } from "../../../config/redux/engineSlice";

const Obstacles = () => {
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.engine.play);
  const speed = useSelector(state => state.engine.speed);
  const obstacle1Ref = useRef();
  const obstacle2Ref = useRef();
  const obstacle3Ref = useRef();


  useEffect(() => {
    setInterval(() => {
      dispatch(obstacle1Height(obstacle1Ref.current.getBoundingClientRect().height));
      dispatch(obstacle1Left(obstacle1Ref.current.getBoundingClientRect().left));
      dispatch(obstacle1Top(obstacle1Ref.current.getBoundingClientRect().top));
      dispatch(obstacle1Width(obstacle1Ref.current.getBoundingClientRect().width));

      dispatch(obstacle2Height(obstacle2Ref.current.getBoundingClientRect().height));
      dispatch(obstacle2Left(obstacle2Ref.current.getBoundingClientRect().left));
      dispatch(obstacle2Top(obstacle2Ref.current.getBoundingClientRect().top));
      dispatch(obstacle2Width(obstacle2Ref.current.getBoundingClientRect().width));

      dispatch(obstacle3Height(obstacle3Ref.current.getBoundingClientRect().height));
      dispatch(obstacle3Left(obstacle3Ref.current.getBoundingClientRect().left));
      dispatch(obstacle3Top(obstacle3Ref.current.getBoundingClientRect().top));
      dispatch(obstacle3Width(obstacle3Ref.current.getBoundingClientRect().width));


    }, 100);
  }, [dispatch]);

  useEffect(() => {
    if (speed >= 0) {
      setTimeout(() => {
        dispatch(setSpeed(0.0001));
      }, 1000);
    }
  }, [speed, dispatch]);

  return (
    <div className="obstacles-container">
      <img
        src={obstacle1}
        alt=""
        className={isPlay ? "obstacle1 obstacle1-move" : "obstacle1"}
        style={isPlay ? { animationDuration: `${6 - speed}s` } : { animationDuration: `6s` }}
        ref={obstacle1Ref}
      />
      <img
        src={obstacle2}
        alt=""
        className={isPlay ? "obstacle2 obstacle2-move" : "obstacle2"}
        style={isPlay ? { animationDuration: `${9 - speed}s` } : { animationDuration: `9s` }}
        ref={obstacle2Ref}
      />
       <img
        src={obstacle3}
        alt=""
        className={isPlay ? "obstacle3 obstacle3-move" : "obstacle3"}
        style={isPlay ? { animationDuration: `${12 - speed}s` } : { animationDuration: `12s` }}
        ref={obstacle3Ref}
      />
    </div>
  );
};
export default Obstacles;
