"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GangofDevils extends Card {
  constructor(game) {
    super(game, "Gang of Devils", "Avacyn Restored", "AVR");
  }
}

module.exports = GangofDevils;
