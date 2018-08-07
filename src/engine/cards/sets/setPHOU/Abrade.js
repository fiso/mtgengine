"use strict";
const Constants = require ("../../../Constants");
const AbradeBase = require("../setHOU/Abrade");

class Abrade extends AbradeBase {
  constructor (game) {
    super(game, "Abrade", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = Abrade;
