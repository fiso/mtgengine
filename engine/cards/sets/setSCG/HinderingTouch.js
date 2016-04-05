"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HinderingTouch extends UnimplementedCard {
  constructor(game) {
    super(game, "Hindering Touch", "Scourge", "SCG");
  }
}

module.exports = HinderingTouch;
