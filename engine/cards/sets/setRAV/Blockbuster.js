"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blockbuster extends Card {
  constructor(game) {
    super(game, "Blockbuster", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Blockbuster;
