"use strict";
const Constants = require ("../../../Constants");
const ScourgeDevilBase = require("../setDDK/ScourgeDevil");

class ScourgeDevil extends ScourgeDevilBase {
  constructor(game) {
    super(game, "Scourge Devil", "Shards of Alara", "ALA");
  }
}

module.exports = ScourgeDevil;
