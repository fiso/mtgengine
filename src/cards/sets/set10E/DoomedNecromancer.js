"use strict";
const Constants = require ("../../../Constants");
const DoomedNecromancerBase = require("../setONS/DoomedNecromancer");

class DoomedNecromancer extends DoomedNecromancerBase {
  constructor (game) {
    super(game, "Doomed Necromancer", "Tenth Edition", "10E");
  }
}

module.exports = DoomedNecromancer;
