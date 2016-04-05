"use strict";
const Constants = require ("../../../Constants");
const BorosGarrisonBase = require("../setC13/BorosGarrison");

class BorosGarrison extends BorosGarrisonBase {
  constructor(game) {
    super(game, "Boros Garrison", "Commander 2015", "C15");
  }
}

module.exports = BorosGarrison;
