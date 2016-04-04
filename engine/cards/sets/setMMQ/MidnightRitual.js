"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MidnightRitual extends Card {
  constructor(game) {
    super(game, "Midnight Ritual", "Mercadian Masques", "MMQ");
  }
}

module.exports = MidnightRitual;
