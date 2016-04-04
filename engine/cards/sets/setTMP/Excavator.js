"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Excavator extends Card {
  constructor(game) {
    super(game, "Excavator", "Tempest", "TMP");
  }
}

module.exports = Excavator;
