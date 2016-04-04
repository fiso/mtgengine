"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fling extends Card {
  constructor(game) {
    super(game, "Fling", "Arena League", "pARL");
  }
}

module.exports = Fling;
