"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Convalescence extends Card {
  constructor(game) {
    super(game, "Convalescence", "Exodus", "EXO");
  }
}

module.exports = Convalescence;
