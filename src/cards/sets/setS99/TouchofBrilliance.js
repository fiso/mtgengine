"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TouchofBrilliance extends UnimplementedCard {
  constructor (game) {
    super(game, "Touch of Brilliance", "Starter 1999", "S99");
  }
}

module.exports = TouchofBrilliance;
