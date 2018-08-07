"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiftyDoppelganger extends UnimplementedCard {
  constructor (game) {
    super(game, "Shifty Doppelganger", "Odyssey", "ODY");
  }
}

module.exports = ShiftyDoppelganger;
