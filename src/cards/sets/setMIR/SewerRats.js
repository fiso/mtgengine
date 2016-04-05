"use strict";
const Constants = require ("../../../Constants");
const SewerRatsBase = require("../setBRB/SewerRats");

class SewerRats extends SewerRatsBase {
  constructor(game) {
    super(game, "Sewer Rats", "Mirage", "MIR");
  }
}

module.exports = SewerRats;
