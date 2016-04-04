"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MischiefandMayhem extends Card {
  constructor(game) {
    super(game, "Mischief and Mayhem", "Born of the Gods", "BNG");
  }
}

module.exports = MischiefandMayhem;
