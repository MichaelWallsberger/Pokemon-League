import React from "react";
import TrainerData from "../../helpers/Trainer.json";
import { Trainer } from "./Trainer";
import "./style.css";
import { TrainerInterface } from "../../helpers/Interfaces";

interface TrainerProps {}

export const Participants: React.FC<TrainerProps> = ({}) => {
  return (
    <div>
      <h1 className="header">Participants</h1>

      <div className="trainer-content">
        {TrainerData.map((trainer: TrainerInterface, idx: number) => {
          return <Trainer key={idx} trainer={trainer} />;
        })}
      </div>
    </div>
  );
};
