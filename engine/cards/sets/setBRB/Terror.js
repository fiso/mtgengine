"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setATH/Terror");

class Terror extends TerrorBase {
  constructor(game) {
    super(game, "Terror", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Terror;
