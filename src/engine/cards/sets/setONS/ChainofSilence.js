"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChainofSilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Chain of Silence", "Onslaught", "ONS");
  }
}

module.exports = ChainofSilence;
