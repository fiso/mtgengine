"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraspofFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Grasp of Fate", "Legendary Cube", "PZ1");
  }
}

module.exports = GraspofFate;
