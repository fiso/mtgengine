"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulKiss extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Kiss", "Masters Edition II", "ME2");
  }
}

module.exports = SoulKiss;
