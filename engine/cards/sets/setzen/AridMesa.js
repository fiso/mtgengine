"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AridMesa extends Card {
  constructor(game) {
    super(game, "Arid Mesa", "Zendikar", "ZEN");
  }
}

module.exports = AridMesa;
