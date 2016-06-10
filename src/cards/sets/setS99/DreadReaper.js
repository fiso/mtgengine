"use strict";
const Constants = require ("../../../Constants");
const DreadReaperBase = require("../setME4/DreadReaper");

class DreadReaper extends DreadReaperBase {
  constructor (game) {
    super(game, "Dread Reaper", "Starter 1999", "S99");
  }
}

module.exports = DreadReaper;
