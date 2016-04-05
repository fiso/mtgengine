"use strict";
const Constants = require ("../../../Constants");
const PalaceGuardBase = require("../setM10/PalaceGuard");

class PalaceGuard extends PalaceGuardBase {
  constructor(game) {
    super(game, "Palace Guard", "Magic 2011", "M11");
  }
}

module.exports = PalaceGuard;
