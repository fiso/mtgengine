"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HexParasite extends Card {
  constructor(game) {
    super(game, "Hex Parasite", "New Phyrexia", "NPH");
  }
}

module.exports = HexParasite;
