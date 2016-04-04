"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptOfficial extends Card {
  constructor(game) {
    super(game, "Corrupt Official", "Mercadian Masques", "MMQ");
  }
}

module.exports = CorruptOfficial;
