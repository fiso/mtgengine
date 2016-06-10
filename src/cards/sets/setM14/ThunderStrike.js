"use strict";
const Constants = require ("../../../Constants");
const ThunderStrikeBase = require("../setM11/ThunderStrike");

class ThunderStrike extends ThunderStrikeBase {
  constructor (game) {
    super(game, "Thunder Strike", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ThunderStrike;
