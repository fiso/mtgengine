"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setATH/Plains");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Plains;
