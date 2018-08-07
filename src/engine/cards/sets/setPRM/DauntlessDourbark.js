"use strict";
const Constants = require ("../../../Constants");
const DauntlessDourbarkBase = require("../setLRW/DauntlessDourbark");

class DauntlessDourbark extends DauntlessDourbarkBase {
  constructor (game) {
    super(game, "Dauntless Dourbark", "Magic Online Promos", "PRM");
  }
}

module.exports = DauntlessDourbark;
