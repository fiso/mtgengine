"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GemstoneMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Gemstone Mine", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = GemstoneMine;
