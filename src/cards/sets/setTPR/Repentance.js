"use strict";
const Constants = require ("../../../Constants");
const RepentanceBase = require("../setTMP/Repentance");

class Repentance extends RepentanceBase {
  constructor (game) {
    super(game, "Repentance", "Tempest Remastered", "TPR");
  }
}

module.exports = Repentance;
