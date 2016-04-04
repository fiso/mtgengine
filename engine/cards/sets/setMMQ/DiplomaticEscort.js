"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiplomaticEscort extends Card {
  constructor(game) {
    super(game, "Diplomatic Escort", "Mercadian Masques", "MMQ");
  }
}

module.exports = DiplomaticEscort;
