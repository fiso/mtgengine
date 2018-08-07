"use strict";
const Constants = require ("../../../Constants");
const DissipateBase = require("../setM15/Dissipate");

class Dissipate extends DissipateBase {
  constructor (game) {
    super(game, "Dissipate", "Magic Online Promos", "PRM");
  }
}

module.exports = Dissipate;
