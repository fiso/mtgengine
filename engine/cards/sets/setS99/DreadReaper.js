"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadReaperBase = require("../setME4/DreadReaper.js");

class DreadReaper extends DreadReaperBase {
  constructor(game) {
    super(game, "Dread Reaper", "Starter 1999", "S99");
  }
}

module.exports = DreadReaper;
