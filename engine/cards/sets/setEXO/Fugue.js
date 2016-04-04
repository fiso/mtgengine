"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fugue extends Card {
  constructor(game) {
    super(game, "Fugue", "Exodus", "EXO");
  }
}

module.exports = Fugue;
