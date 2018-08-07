"use strict";
const Constants = require ("../../../Constants");
const DoomedNecromancerBase = require("../set10E/DoomedNecromancer");

class DoomedNecromancer extends DoomedNecromancerBase {
  constructor (game) {
    super(game, "Doomed Necromancer", "Onslaught", "ONS");
  }
}

module.exports = DoomedNecromancer;
