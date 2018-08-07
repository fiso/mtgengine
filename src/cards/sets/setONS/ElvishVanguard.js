"use strict";
const Constants = require ("../../../Constants");
const ElvishVanguardBase = require("../setDDU/ElvishVanguard");

class ElvishVanguard extends ElvishVanguardBase {
  constructor (game) {
    super(game, "Elvish Vanguard", "Onslaught", "ONS");
  }
}

module.exports = ElvishVanguard;
