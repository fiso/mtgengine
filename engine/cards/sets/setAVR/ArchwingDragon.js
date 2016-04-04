"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchwingDragon extends Card {
  constructor(game) {
    super(game, "Archwing Dragon", "Avacyn Restored", "AVR");
  }
}

module.exports = ArchwingDragon;
