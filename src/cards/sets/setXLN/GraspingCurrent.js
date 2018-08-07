"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraspingCurrent extends UnimplementedCard {
  constructor (game) {
    super(game, "Grasping Current", "Ixalan", "XLN");
  }
}

module.exports = GraspingCurrent;
