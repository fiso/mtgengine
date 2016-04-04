"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorrifyingRevelation extends Card {
  constructor(game) {
    super(game, "Horrifying Revelation", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HorrifyingRevelation;
