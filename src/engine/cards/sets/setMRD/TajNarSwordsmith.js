"use strict";
const Constants = require ("../../../Constants");
const TajNarSwordsmithBase = require("../setC17/TajNarSwordsmith");

class TajNarSwordsmith extends TajNarSwordsmithBase {
  constructor (game) {
    super(game, "Taj-Nar Swordsmith", "Mirrodin", "MRD");
  }
}

module.exports = TajNarSwordsmith;
