"use strict";
const Constants = require ("../../../Constants");
const ThunderStrikeBase = require("../setBBD/ThunderStrike");

class ThunderStrike extends ThunderStrikeBase {
  constructor (game) {
    super(game, "Thunder Strike", "Magic 2011", "M11");
  }
}

module.exports = ThunderStrike;
