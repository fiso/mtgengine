"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scragnoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Scragnoth", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Scragnoth;
