"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchofBrilliance extends UnimplementedCard {
  constructor (game) {
    super(game, "Touch of Brilliance", "Portal", "POR");
  }
}

module.exports = TouchofBrilliance;
