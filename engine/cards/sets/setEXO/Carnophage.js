"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carnophage extends Card {
  constructor(game) {
    super(game, "Carnophage", "Exodus", "EXO");
  }
}

module.exports = Carnophage;
