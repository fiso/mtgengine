"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainingDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Training Drone", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TrainingDrone;
