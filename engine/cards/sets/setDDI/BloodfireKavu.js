"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodfireKavuBase = require("../setAPC/BloodfireKavu.js");

class BloodfireKavu extends BloodfireKavuBase {
  constructor(game) {
    super(game, "Bloodfire Kavu", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = BloodfireKavu;
