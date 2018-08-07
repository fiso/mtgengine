"use strict";
const Constants = require ("../../../Constants");
const DoomedNecromancerBase = require("../set10E/DoomedNecromancer");

class DoomedNecromancer extends DoomedNecromancerBase {
  constructor (game) {
    super(game, "Doomed Necromancer", "World Championship Decks 2003", "WC03");
  }
}

module.exports = DoomedNecromancer;
