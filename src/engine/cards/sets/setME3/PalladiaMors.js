"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalladiaMors extends UnimplementedCard {
  constructor (game) {
    super(game, "Palladia-Mors", "Masters Edition III", "ME3");
  }
}

module.exports = PalladiaMors;
