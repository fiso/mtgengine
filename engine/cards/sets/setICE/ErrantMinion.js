"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErrantMinion extends Card {
  constructor(game) {
    super(game, "Errant Minion", "Ice Age", "ICE");
  }
}

module.exports = ErrantMinion;
