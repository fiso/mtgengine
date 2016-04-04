"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirranCrusader extends Card {
  constructor(game) {
    super(game, "Mirran Crusader", "Media Inserts", "pMEI");
  }
}

module.exports = MirranCrusader;
