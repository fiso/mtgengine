"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitchHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Witch Hunter", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = WitchHunter;
