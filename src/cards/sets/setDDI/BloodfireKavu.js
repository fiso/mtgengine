"use strict";
const Constants = require ("../../../Constants");
const BloodfireKavuBase = require("../setAPC/BloodfireKavu");

class BloodfireKavu extends BloodfireKavuBase {
  constructor(game) {
    super(game, "Bloodfire Kavu", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = BloodfireKavu;
