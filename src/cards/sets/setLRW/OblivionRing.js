"use strict";
const Constants = require ("../../../Constants");
const OblivionRingBase = require("../setARC/OblivionRing");

class OblivionRing extends OblivionRingBase {
  constructor (game) {
    super(game, "Oblivion Ring", "Lorwyn", "LRW");
  }
}

module.exports = OblivionRing;
