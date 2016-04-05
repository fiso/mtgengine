"use strict";
const Constants = require ("../../../Constants");
const ElvishBardBase = require("../setALL/ElvishBard");

class ElvishBard extends ElvishBardBase {
  constructor(game) {
    super(game, "Elvish Bard", "Deckmasters", "DKM");
  }
}

module.exports = ElvishBard;
