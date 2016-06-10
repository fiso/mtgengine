"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagistratesScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Magistrate's Scepter", "Mercadian Masques", "MMQ");
  }
}

module.exports = MagistratesScepter;
