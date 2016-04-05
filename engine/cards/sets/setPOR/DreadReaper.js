"use strict";
const Constants = require ("../../../Constants");
const DreadReaperBase = require("../setME4/DreadReaper");

class DreadReaper extends DreadReaperBase {
  constructor(game) {
    super(game, "Dread Reaper", "Portal", "POR");
  }
}

module.exports = DreadReaper;
