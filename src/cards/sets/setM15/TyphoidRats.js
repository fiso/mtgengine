"use strict";
const Constants = require ("../../../Constants");
const TyphoidRatsBase = require("../setFRF/TyphoidRats");

class TyphoidRats extends TyphoidRatsBase {
  constructor (game) {
    super(game, "Typhoid Rats", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TyphoidRats;
