"use strict";
const Constants = require ("../../../Constants");
const FledglingDjinnBase = require("../setVMA/FledglingDjinn");

class FledglingDjinn extends FledglingDjinnBase {
  constructor(game) {
    super(game, "Fledgling Djinn", "Weatherlight", "WTH");
  }
}

module.exports = FledglingDjinn;
