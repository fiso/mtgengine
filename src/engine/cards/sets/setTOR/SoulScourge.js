"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulScourge extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Scourge", "Torment", "TOR");
  }
}

module.exports = SoulScourge;
