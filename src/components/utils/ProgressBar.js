import React from 'react'
import { arc } from 'd3-shape';
import { scaleLinear } from "d3-scale"
const ProgressBar = ({
    value=3,
    min=0,
    max=6,
    label,
    units,
  })=> {
    
    const grayArc = arc()
    .innerRadius(1)
    .outerRadius(0.9)
    .startAngle(-Math.PI/3)
    .endAngle(-Math.PI/2)
    .padAngle(0)
    .cornerRadius(0)();

    const purpleTwoArc = arc()
    .innerRadius(1)
    .outerRadius(0.9)
    .startAngle(-Math.PI/3)
    .endAngle(-Math.PI/6)
    .padAngle(0)
    .cornerRadius(0)();

    const purpleThreeArc = arc()
    .innerRadius(1)
    .outerRadius(0.9)
    .startAngle(-Math.PI/6)
    .endAngle(0)
    .padAngle(0)
    .cornerRadius(0)();

  const purpleFourArc = arc()
    .innerRadius(1)
    .outerRadius(0.9)
    .startAngle(Math.PI/6)
    .endAngle(0)
    .padAngle(0)
    .cornerRadius(0)();
    
    const purpleFiveArc = arc()
    .innerRadius(1)
    .outerRadius(0.9)
    .startAngle(Math.PI/3)
    .endAngle(Math.PI/6)
    .padAngle(0)
    .cornerRadius(0)();

  const purpleSixArc = arc()
    .innerRadius(1)
    .outerRadius(0.9)
    .startAngle(Math.PI/3)
    .endAngle(Math.PI/2)
    .padAngle(0)
    .cornerRadius(0)();

    const getCoordsOnArc = (angle, offset=10) => [
        Math.cos(angle - (Math.PI / 2)) * offset,
        Math.sin(angle - (Math.PI / 2)) * offset,
      ]
      const percentScale = scaleLinear()
    .domain([min, max])
    .range([0, 1]);
      const percent = percentScale(value);
      
      const angleScale = scaleLinear()
      .domain([0, 1])
      .range([-Math.PI / 2, Math.PI / 2])
      .clamp(true);
      const angle = angleScale(percent)
      
    const markerLocation = getCoordsOnArc(
        angle,
        1 - ((1 - 0.9) / 2),
      )
    
    
    const getBlobColor = value => {
        if (value >= 0 && value <= 25) return "rgba(255, 255, 255, 0.24)";
        if (value > 15 && value <= 30) return "rgba(205, 187, 255, 0.63)";
        if (value > 30 && value <= 50) return "rgba(172, 142, 255, 0.78)";
        if (value > 50 && value <= 70) return "rgba(152, 116, 255, 0.83)";
        if (value > 70 && value <= 90) return "rgba(134, 92, 253, 0.85)";
        if (value >= 90) return "#713FFD";
      };
      
  return (
    <div className='w-40 h-40 mt-12 mx-5'>
    <svg viewBox={[-1, -1, 2, 1].join(" ")}>
    <path d={grayArc} fill="rgba(255, 255, 255, 0.24)" />
    <path d={purpleTwoArc} fill="rgba(205, 187, 255, 0.63)" />
    <path d={purpleThreeArc} fill="rgba(172, 142, 255, 0.78)" />
    <path d={purpleFourArc} fill="rgba(152, 116, 255, 0.83)" />
    <path d={purpleFiveArc} fill="rgba(134, 92, 253, 0.85)" />
    <path d={purpleSixArc} fill="#713FFD" />
    <circle
       cx={markerLocation[0]}
       cy={markerLocation[1]}
       r="0.06"
       strokeWidth="0.03"
       fill={getBlobColor(value)}
       stroke="white"
       
     />
  </svg>
  </div>
  )
}


export default ProgressBar