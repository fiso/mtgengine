"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dogpile extends Card {
  constructor(game) {
    super(game, "Dogpile", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Dogpile;
