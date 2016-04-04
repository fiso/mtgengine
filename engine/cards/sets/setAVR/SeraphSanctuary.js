"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeraphSanctuary extends Card {
  constructor(game) {
    super(game, "Seraph Sanctuary", "Avacyn Restored", "AVR");
  }
}

module.exports = SeraphSanctuary;
