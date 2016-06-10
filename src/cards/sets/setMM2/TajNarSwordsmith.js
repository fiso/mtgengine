"use strict";
const Constants = require ("../../../Constants");
const TajNarSwordsmithBase = require("../setMRD/TajNarSwordsmith");

class TajNarSwordsmith extends TajNarSwordsmithBase {
  constructor (game) {
    super(game, "Taj-Nar Swordsmith", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TajNarSwordsmith;
