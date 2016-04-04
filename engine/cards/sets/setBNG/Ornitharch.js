"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ornitharch extends Card {
  constructor(game) {
    super(game, "Ornitharch", "Born of the Gods", "BNG");
  }
}

module.exports = Ornitharch;
