"use strict";
const Constants = require ("../../../Constants");
const CurfewBase = require("../setBRB/Curfew");

class Curfew extends CurfewBase {
  constructor(game) {
    super(game, "Curfew", "Urza's Saga", "USG");
  }
}

module.exports = Curfew;
