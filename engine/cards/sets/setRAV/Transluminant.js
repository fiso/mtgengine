"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Transluminant extends Card {
  constructor(game) {
    super(game, "Transluminant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Transluminant;
