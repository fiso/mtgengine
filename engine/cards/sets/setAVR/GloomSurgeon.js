"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GloomSurgeon extends Card {
  constructor(game) {
    super(game, "Gloom Surgeon", "Avacyn Restored", "AVR");
  }
}

module.exports = GloomSurgeon;
