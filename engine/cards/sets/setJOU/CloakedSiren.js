"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloakedSiren extends Card {
  constructor(game) {
    super(game, "Cloaked Siren", "Journey into Nyx", "JOU");
  }
}

module.exports = CloakedSiren;
