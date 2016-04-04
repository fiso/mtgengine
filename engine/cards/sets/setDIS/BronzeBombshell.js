"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BronzeBombshell extends Card {
  constructor(game) {
    super(game, "Bronze Bombshell", "Dissension", "DIS");
  }
}

module.exports = BronzeBombshell;
