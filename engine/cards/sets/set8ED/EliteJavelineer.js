"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteJavelineer extends Card {
  constructor(game) {
    super(game, "Elite Javelineer", "Eighth Edition", "8ED");
  }
}

module.exports = EliteJavelineer;
