"use strict";
const Constants = require ("../../../Constants");
const MysticRemoraBase = require("../setICE/MysticRemora");

class MysticRemora extends MysticRemoraBase {
  constructor(game) {
    super(game, "Mystic Remora", "Masters Edition", "MED");
  }
}

module.exports = MysticRemora;
