"use strict";
const Constants = require ("../../../Constants");
const DauntlessDourbarkBase = require("../setpGTW/DauntlessDourbark");

class DauntlessDourbark extends DauntlessDourbarkBase {
  constructor (game) {
    super(game, "Dauntless Dourbark", "Lorwyn", "LRW");
  }
}

module.exports = DauntlessDourbark;
