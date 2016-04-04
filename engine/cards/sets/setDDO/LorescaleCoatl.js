"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LorescaleCoatlBase = require("../setARB/LorescaleCoatl.js");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor(game) {
    super(game, "Lorescale Coatl", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = LorescaleCoatl;
