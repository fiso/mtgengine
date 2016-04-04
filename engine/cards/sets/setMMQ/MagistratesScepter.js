"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagistratesScepter extends Card {
  constructor(game) {
    super(game, "Magistrate's Scepter", "Mercadian Masques", "MMQ");
  }
}

module.exports = MagistratesScepter;
