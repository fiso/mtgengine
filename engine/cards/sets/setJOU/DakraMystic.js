"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakraMystic extends Card {
  constructor(game) {
    super(game, "Dakra Mystic", "Journey into Nyx", "JOU");
  }
}

module.exports = DakraMystic;
