"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leviathan extends UnimplementedCard {
  constructor (game) {
    super(game, "Leviathan", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Leviathan;
