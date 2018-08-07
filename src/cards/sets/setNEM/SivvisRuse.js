"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SivvisRuse extends UnimplementedCard {
  constructor (game) {
    super(game, "Sivvi's Ruse", "Nemesis", "NEM");
  }
}

module.exports = SivvisRuse;
