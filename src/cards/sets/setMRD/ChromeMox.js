"use strict";
const Constants = require ("../../../Constants");
const ChromeMoxBase = require("../setpGPX/ChromeMox");

class ChromeMox extends ChromeMoxBase {
  constructor (game) {
    super(game, "Chrome Mox", "Mirrodin", "MRD");
  }
}

module.exports = ChromeMox;
