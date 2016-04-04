"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolrathsMotionSensor extends Card {
  constructor(game) {
    super(game, "Volrath's Motion Sensor", "Unglued", "UGL");
  }
}

module.exports = VolrathsMotionSensor;
