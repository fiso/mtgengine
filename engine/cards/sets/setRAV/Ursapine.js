"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ursapine extends Card {
  constructor(game) {
    super(game, "Ursapine", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Ursapine;
