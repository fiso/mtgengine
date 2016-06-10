"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setDDJ/Dissipate");

class Dissipate extends DissipateBase {
  constructor (game) {
    super(game, "Dissipate", "Friday Night Magic", "pFNM");
  }
}

module.exports = Dissipate;
