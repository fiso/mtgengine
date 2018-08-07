"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiderClimb extends UnimplementedCard {
  constructor (game) {
    super(game, "Spider Climb", "Visions", "VIS");
  }
}

module.exports = SpiderClimb;
