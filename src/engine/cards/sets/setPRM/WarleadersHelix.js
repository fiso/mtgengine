"use strict";
const Constants = require ("../../../Constants");
const WarleadersHelixBase = require("../setF14/WarleadersHelix");

class WarleadersHelix extends WarleadersHelixBase {
  constructor (game) {
    super(game, "Warleader's Helix", "Magic Online Promos", "PRM");
  }
}

module.exports = WarleadersHelix;
