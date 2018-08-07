"use strict";
const Constants = require ("../../../Constants");
const TyphoidRatsBase = require("../setFRF/TyphoidRats");

class TyphoidRats extends TyphoidRatsBase {
  constructor (game) {
    super(game, "Typhoid Rats", "Conspiracy", "CNS");
  }
}

module.exports = TyphoidRats;
