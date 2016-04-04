"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Manakin extends Card {
  constructor(game) {
    super(game, "Manakin", "Tempest", "TMP");
  }
}

module.exports = Manakin;
