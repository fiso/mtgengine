"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarclampMastiff extends Card {
  constructor(game) {
    super(game, "Warclamp Mastiff", "Magic 2013", "M13");
  }
}

module.exports = WarclampMastiff;
