"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainingDrone extends Card {
  constructor(game) {
    super(game, "Training Drone", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TrainingDrone;
