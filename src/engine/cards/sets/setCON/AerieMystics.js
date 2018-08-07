"use strict";
const Constants = require ("../../../Constants");
const AerieMysticsBase = require("../setCMA/AerieMystics");

class AerieMystics extends AerieMysticsBase {
  constructor (game) {
    super(game, "Aerie Mystics", "Conflux", "CON");
  }
}

module.exports = AerieMystics;
