"use strict";
const Constants = require ("../../../Constants");
const MysticMonasteryBase = require("../setC17/MysticMonastery");

class MysticMonastery extends MysticMonasteryBase {
  constructor (game) {
    super(game, "Mystic Monastery", "Commander 2016", "C16");
  }
}

module.exports = MysticMonastery;
