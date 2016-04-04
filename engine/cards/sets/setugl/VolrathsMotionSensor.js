"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolrathsMotionSensor extends UnimplementedCard {
  constructor(game) {
    super(game, "Volrath's Motion Sensor", "Unglued", "UGL");
  }
}

module.exports = VolrathsMotionSensor;
