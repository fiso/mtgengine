"use strict";
const Constants = require ("../../../Constants");
const BrittleEffigyBase = require("../setDDT/BrittleEffigy");

class BrittleEffigy extends BrittleEffigyBase {
  constructor (game) {
    super(game, "Brittle Effigy", "Magic 2011", "M11");
  }
}

module.exports = BrittleEffigy;
