"use strict";
const Constants = require ("../../../Constants");
const MysticZealotBase = require("../setVMA/MysticZealot");

class MysticZealot extends MysticZealotBase {
  constructor (game) {
    super(game, "Mystic Zealot", "Odyssey", "ODY");
  }
}

module.exports = MysticZealot;
