"use strict";
const Constants = require ("../../../Constants");
const DawnbreakReclaimerBase = require("../setCM2/DawnbreakReclaimer");

class DawnbreakReclaimer extends DawnbreakReclaimerBase {
  constructor (game) {
    super(game, "Dawnbreak Reclaimer", "Commander 2015", "C15");
  }
}

module.exports = DawnbreakReclaimer;
