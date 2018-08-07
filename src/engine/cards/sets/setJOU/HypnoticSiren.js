"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HypnoticSiren extends UnimplementedCard {
  constructor (game) {
    super(game, "Hypnotic Siren", "Journey into Nyx", "JOU");
  }
}

module.exports = HypnoticSiren;
