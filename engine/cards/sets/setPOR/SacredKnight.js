"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredKnight extends Card {
  constructor(game) {
    super(game, "Sacred Knight", "Portal", "POR");
  }
}

module.exports = SacredKnight;
