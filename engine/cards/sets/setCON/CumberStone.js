"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CumberStone extends Card {
  constructor(game) {
    super(game, "Cumber Stone", "Conflux", "CON");
  }
}

module.exports = CumberStone;
