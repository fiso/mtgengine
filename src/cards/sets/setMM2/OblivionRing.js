"use strict";
const Constants = require ("../../../Constants");
const OblivionRingBase = require("../setARC/OblivionRing");

class OblivionRing extends OblivionRingBase {
  constructor(game) {
    super(game, "Oblivion Ring", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = OblivionRing;
