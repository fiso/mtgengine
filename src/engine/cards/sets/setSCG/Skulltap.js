"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skulltap extends UnimplementedCard {
  constructor (game) {
    super(game, "Skulltap", "Scourge", "SCG");
  }
}

module.exports = Skulltap;
