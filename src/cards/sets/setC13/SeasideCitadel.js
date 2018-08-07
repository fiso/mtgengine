"use strict";
const Constants = require ("../../../Constants");
const SeasideCitadelBase = require("../setC18/SeasideCitadel");

class SeasideCitadel extends SeasideCitadelBase {
  constructor (game) {
    super(game, "Seaside Citadel", "Commander 2013", "C13");
  }
}

module.exports = SeasideCitadel;
