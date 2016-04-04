"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreadReaperBase = require("../setME4/DreadReaper.js");

class DreadReaper extends DreadReaperBase {
  constructor(game) {
    super(game, "Dread Reaper", "Portal", "POR");
  }
}

module.exports = DreadReaper;
