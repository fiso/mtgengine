"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Nullify extends Card {
  constructor(game) {
    super(game, "Nullify", "Born of the Gods", "BNG");
  }
}

module.exports = Nullify;
