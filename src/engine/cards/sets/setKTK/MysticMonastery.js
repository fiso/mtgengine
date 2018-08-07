"use strict";
const Constants = require ("../../../Constants");
const MysticMonasteryBase = require("../setC17/MysticMonastery");

class MysticMonastery extends MysticMonasteryBase {
  constructor (game) {
    super(game, "Mystic Monastery", "Khans of Tarkir", "KTK");
  }
}

module.exports = MysticMonastery;
