"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuenchableFire extends Card {
  constructor(game) {
    super(game, "Quenchable Fire", "Conflux", "CON");
  }
}

module.exports = QuenchableFire;
