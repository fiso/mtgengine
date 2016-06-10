"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenderofChaos extends UnimplementedCard {
  constructor (game) {
    super(game, "Defender of Chaos", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenderofChaos;
