"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorderlandRanger extends Card {
  constructor(game) {
    super(game, "Borderland Ranger", "Avacyn Restored", "AVR");
  }
}

module.exports = BorderlandRanger;
