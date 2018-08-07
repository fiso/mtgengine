"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JestersMask extends UnimplementedCard {
  constructor (game) {
    super(game, "Jester's Mask", "Masters Edition II", "ME2");
  }
}

module.exports = JestersMask;
