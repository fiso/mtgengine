"use strict";
const Constants = require ("../../../Constants");
const CurseofVitalityBase = require("../setC17/CurseofVitality");

class CurseofVitality extends CurseofVitalityBase {
  constructor (game) {
    super(game, "Curse of Vitality", "You Make the Cube", "PZ2");
  }
}

module.exports = CurseofVitality;
