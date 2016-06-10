"use strict";
const Constants = require ("../../../Constants");
const VerdigrisBase = require("../setTMP/Verdigris");

class Verdigris extends VerdigrisBase {
  constructor (game) {
    super(game, "Verdigris", "Tempest Remastered", "TPR");
  }
}

module.exports = Verdigris;
