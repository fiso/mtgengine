"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwistedJustice extends Card {
  constructor(game) {
    super(game, "Twisted Justice", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TwistedJustice;
