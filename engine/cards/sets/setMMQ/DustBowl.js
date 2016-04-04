"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DustBowl extends Card {
  constructor(game) {
    super(game, "Dust Bowl", "Mercadian Masques", "MMQ");
  }
}

module.exports = DustBowl;
