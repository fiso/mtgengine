"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DetectionTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Detection Tower", "Core Set 2019", "M19");
  }
}

module.exports = DetectionTower;
