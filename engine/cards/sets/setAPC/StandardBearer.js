"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandardBearer extends Card {
  constructor(game) {
    super(game, "Standard Bearer", "Apocalypse", "APC");
  }
}

module.exports = StandardBearer;
