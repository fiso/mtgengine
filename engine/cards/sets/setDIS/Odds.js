"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Odds extends Card {
  constructor(game) {
    super(game, "Odds", "Dissension", "DIS");
  }
}

module.exports = Odds;
