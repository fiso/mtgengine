"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticDenial extends Card {
  constructor(game) {
    super(game, "Mystic Denial", "Portal", "POR");
  }
}

module.exports = MysticDenial;
