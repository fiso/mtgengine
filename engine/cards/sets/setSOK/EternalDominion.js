"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EternalDominion extends Card {
  constructor(game) {
    super(game, "Eternal Dominion", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = EternalDominion;
