"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LordofAtlantis extends UnimplementedCard {
  constructor (game) {
    super(game, "Lord of Atlantis", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = LordofAtlantis;
