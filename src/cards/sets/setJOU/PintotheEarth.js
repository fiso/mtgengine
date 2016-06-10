"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PintotheEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Pin to the Earth", "Journey into Nyx", "JOU");
  }
}

module.exports = PintotheEarth;
