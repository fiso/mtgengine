"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindmoil extends Card {
  constructor(game) {
    super(game, "Mindmoil", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Mindmoil;
