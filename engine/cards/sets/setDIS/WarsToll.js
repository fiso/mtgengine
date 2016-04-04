"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarsToll extends Card {
  constructor(game) {
    super(game, "War's Toll", "Dissension", "DIS");
  }
}

module.exports = WarsToll;
