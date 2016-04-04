"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElfhameSanctuary extends Card {
  constructor(game) {
    super(game, "Elfhame Sanctuary", "Invasion", "INV");
  }
}

module.exports = ElfhameSanctuary;
