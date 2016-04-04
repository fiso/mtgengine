"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrusadingKnight extends Card {
  constructor(game) {
    super(game, "Crusading Knight", "Invasion", "INV");
  }
}

module.exports = CrusadingKnight;
