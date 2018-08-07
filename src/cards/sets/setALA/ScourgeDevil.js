"use strict";
const Constants = require ("../../../Constants");
const ScourgeDevilBase = require("../setMM3/ScourgeDevil");

class ScourgeDevil extends ScourgeDevilBase {
  constructor (game) {
    super(game, "Scourge Devil", "Shards of Alara", "ALA");
  }
}

module.exports = ScourgeDevil;
