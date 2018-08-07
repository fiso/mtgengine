"use strict";
const Constants = require ("../../../Constants");
const PalaceGuardBase = require("../setM11/PalaceGuard");

class PalaceGuard extends PalaceGuardBase {
  constructor (game) {
    super(game, "Palace Guard", "Magic 2010", "M10");
  }
}

module.exports = PalaceGuard;
