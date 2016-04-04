"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CowerinFear extends Card {
  constructor(game) {
    super(game, "Cower in Fear", "Magic 2013", "M13");
  }
}

module.exports = CowerinFear;
