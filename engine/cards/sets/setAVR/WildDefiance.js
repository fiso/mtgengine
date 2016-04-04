"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildDefiance extends Card {
  constructor(game) {
    super(game, "Wild Defiance", "Avacyn Restored", "AVR");
  }
}

module.exports = WildDefiance;
