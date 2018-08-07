"use strict";
const Constants = require ("../../../Constants");
const AbradeBase = require("../setHOU/Abrade");

class Abrade extends AbradeBase {
  constructor (game) {
    super(game, "Abrade", "Magic Online Promos", "PRM");
  }
}

module.exports = Abrade;
