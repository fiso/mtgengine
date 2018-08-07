"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setM15/Dissipate");

class Dissipate extends DissipateBase {
  constructor (game) {
    super(game, "Dissipate", "Friday Night Magic 2002", "F02");
  }
}

module.exports = Dissipate;
