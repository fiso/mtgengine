"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CruelFeeding extends Card {
  constructor(game) {
    super(game, "Cruel Feeding", "Journey into Nyx", "JOU");
  }
}

module.exports = CruelFeeding;
