"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulShred extends Card {
  constructor(game) {
    super(game, "Soul Shred", "Masters Edition IV", "ME4");
  }
}

module.exports = SoulShred;
