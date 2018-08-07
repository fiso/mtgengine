"use strict";
const Constants = require ("../../../Constants");
const SacredBoonBase = require("../setME2/SacredBoon");

class SacredBoon extends SacredBoonBase {
  constructor (game) {
    super(game, "Sacred Boon", "Fifth Edition", "5ED");
  }
}

module.exports = SacredBoon;
