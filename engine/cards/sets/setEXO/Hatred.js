"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hatred extends Card {
  constructor(game) {
    super(game, "Hatred", "Exodus", "EXO");
  }
}

module.exports = Hatred;
