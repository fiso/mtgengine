"use strict";
const Constants = require ("../../../Constants");
const DawnbreakReclaimerBase = require("../setCM2/DawnbreakReclaimer");

class DawnbreakReclaimer extends DawnbreakReclaimerBase {
  constructor (game) {
    super(game, "Dawnbreak Reclaimer", "Legendary Cube", "PZ1");
  }
}

module.exports = DawnbreakReclaimer;
