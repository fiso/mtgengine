"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalBellow extends Card {
  constructor(game) {
    super(game, "Primal Bellow", "Zendikar", "ZEN");
  }
}

module.exports = PrimalBellow;
