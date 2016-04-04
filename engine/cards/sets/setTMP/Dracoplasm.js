"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dracoplasm extends Card {
  constructor(game) {
    super(game, "Dracoplasm", "Tempest", "TMP");
  }
}

module.exports = Dracoplasm;
