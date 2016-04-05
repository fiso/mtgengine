"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralThrowback extends UnimplementedCard {
  constructor(game) {
    super(game, "Feral Throwback", "Legions", "LGN");
  }
}

module.exports = FeralThrowback;
