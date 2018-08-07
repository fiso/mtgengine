"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecreeofSilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Decree of Silence", "Scourge", "SCG");
  }
}

module.exports = DecreeofSilence;
