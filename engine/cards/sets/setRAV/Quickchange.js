"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Quickchange extends Card {
  constructor(game) {
    super(game, "Quickchange", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Quickchange;
