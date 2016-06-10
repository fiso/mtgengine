"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Touch", "Masters Edition III", "ME3");
  }
}

module.exports = GaeasTouch;
