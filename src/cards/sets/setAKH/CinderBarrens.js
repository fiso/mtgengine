"use strict";
const Constants = require ("../../../Constants");
const CinderBarrensBase = require("../setM19/CinderBarrens");

class CinderBarrens extends CinderBarrensBase {
  constructor (game) {
    super(game, "Cinder Barrens", "Amonkhet", "AKH");
  }
}

module.exports = CinderBarrens;
