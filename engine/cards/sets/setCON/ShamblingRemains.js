"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamblingRemains extends Card {
  constructor(game) {
    super(game, "Shambling Remains", "Conflux", "CON");
  }
}

module.exports = ShamblingRemains;
