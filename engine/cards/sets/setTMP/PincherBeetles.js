"use strict";
const Constants = require ("../../../Constants");
const PincherBeetlesBase = require("../setBRB/PincherBeetles");

class PincherBeetles extends PincherBeetlesBase {
  constructor(game) {
    super(game, "Pincher Beetles", "Tempest", "TMP");
  }
}

module.exports = PincherBeetles;
