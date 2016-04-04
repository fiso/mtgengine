"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Transmutation extends Card {
  constructor(game) {
    super(game, "Transmutation", "Chronicles", "CHR");
  }
}

module.exports = Transmutation;
