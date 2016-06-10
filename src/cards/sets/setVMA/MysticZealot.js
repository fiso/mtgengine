"use strict";
const Constants = require ("../../../Constants");
const MysticZealotBase = require("../setODY/MysticZealot");

class MysticZealot extends MysticZealotBase {
  constructor (game) {
    super(game, "Mystic Zealot", "Vintage Masters", "VMA");
  }
}

module.exports = MysticZealot;
