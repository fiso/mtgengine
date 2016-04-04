"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PierceStrider extends Card {
  constructor(game) {
    super(game, "Pierce Strider", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PierceStrider;
