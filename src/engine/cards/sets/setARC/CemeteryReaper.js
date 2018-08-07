"use strict";
const Constants = require ("../../../Constants");
const CemeteryReaperBase = require("../setM12/CemeteryReaper");

class CemeteryReaper extends CemeteryReaperBase {
  constructor (game) {
    super(game, "Cemetery Reaper", "Archenemy", "ARC");
  }
}

module.exports = CemeteryReaper;
