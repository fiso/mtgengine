"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoneRevenant extends Card {
  constructor(game) {
    super(game, "Lone Revenant", "Avacyn Restored", "AVR");
  }
}

module.exports = LoneRevenant;
