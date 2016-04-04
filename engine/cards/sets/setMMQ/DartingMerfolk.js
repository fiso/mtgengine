"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DartingMerfolk extends Card {
  constructor(game) {
    super(game, "Darting Merfolk", "Mercadian Masques", "MMQ");
  }
}

module.exports = DartingMerfolk;
