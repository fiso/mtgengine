"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TriassicEgg extends Card {
  constructor(game) {
    super(game, "Triassic Egg", "Chronicles", "CHR");
  }
}

module.exports = TriassicEgg;
