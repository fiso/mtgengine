"use strict";
const Constants = require ("../../../Constants");
const SeasideCitadelBase = require("../setC18/SeasideCitadel");

class SeasideCitadel extends SeasideCitadelBase {
  constructor (game) {
    super(game, "Seaside Citadel", "Modern Masters 2017", "MM3");
  }
}

module.exports = SeasideCitadel;
