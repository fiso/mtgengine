"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyrrhicRevival extends Card {
  constructor(game) {
    super(game, "Pyrrhic Revival", "Eventide", "EVE");
  }
}

module.exports = PyrrhicRevival;
