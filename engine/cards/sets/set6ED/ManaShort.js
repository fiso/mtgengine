"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaShort extends Card {
  constructor(game) {
    super(game, "Mana Short", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ManaShort;
