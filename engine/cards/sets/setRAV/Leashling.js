"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Leashling extends Card {
  constructor(game) {
    super(game, "Leashling", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Leashling;
