"use strict";
const Constants = require ("../../../Constants");
const PlagueStingerBase = require("../setSOM/PlagueStinger");

class PlagueStinger extends PlagueStingerBase {
  constructor (game) {
    super(game, "Plague Stinger", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = PlagueStinger;
