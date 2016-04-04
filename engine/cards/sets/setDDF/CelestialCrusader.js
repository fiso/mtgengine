"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CelestialCrusaderBase = require("../setC14/CelestialCrusader.js");

class CelestialCrusader extends CelestialCrusaderBase {
  constructor(game) {
    super(game, "Celestial Crusader", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = CelestialCrusader;
