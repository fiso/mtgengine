"use strict";
const Constants = require ("../../../Constants");
const DauntlessDourbarkBase = require("../setLRW/DauntlessDourbark");

class DauntlessDourbark extends DauntlessDourbarkBase {
  constructor (game) {
    super(game, "Dauntless Dourbark", "Gateway 2007", "PG07");
  }
}

module.exports = DauntlessDourbark;
