"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalonSliver extends Card {
  constructor(game) {
    super(game, "Talon Sliver", "Tempest", "TMP");
  }
}

module.exports = TalonSliver;
