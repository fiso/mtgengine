"use strict";
const Constants = require ("../../../Constants");
const TajNarSwordsmithBase = require("../setC17/TajNarSwordsmith");

class TajNarSwordsmith extends TajNarSwordsmithBase {
  constructor (game) {
    super(game, "Taj-Nar Swordsmith", "Modern Masters 2015", "MM2");
  }
}

module.exports = TajNarSwordsmith;
