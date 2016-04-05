"use strict";
const Constants = require ("../../../Constants");
const PyromaticsBase = require("../setDDJ/Pyromatics");

class Pyromatics extends PyromaticsBase {
  constructor(game) {
    super(game, "Pyromatics", "Guildpact", "GPT");
  }
}

module.exports = Pyromatics;
