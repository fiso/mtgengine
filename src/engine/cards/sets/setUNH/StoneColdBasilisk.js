"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneColdBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone-Cold Basilisk", "Unhinged", "UNH");
  }
}

module.exports = StoneColdBasilisk;
