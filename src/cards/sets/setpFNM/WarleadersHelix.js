"use strict";
const Constants = require ("../../../Constants");
const WarleadersHelixBase = require("../setDGM/WarleadersHelix");

class WarleadersHelix extends WarleadersHelixBase {
  constructor(game) {
    super(game, "Warleader's Helix", "Friday Night Magic", "pFNM");
  }
}

module.exports = WarleadersHelix;
