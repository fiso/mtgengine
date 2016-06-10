"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalladiaMors extends UnimplementedCard {
  constructor (game) {
    super(game, "Palladia-Mors", "Chronicles", "CHR");
  }
}

module.exports = PalladiaMors;
