"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogWitch extends Card {
  constructor(game) {
    super(game, "Bog Witch", "Archenemy", "ARC");
  }
}

module.exports = BogWitch;
