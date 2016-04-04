"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dermoplasm extends Card {
  constructor(game) {
    super(game, "Dermoplasm", "Legions", "LGN");
  }
}

module.exports = Dermoplasm;
