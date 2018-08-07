"use strict";
const Constants = require ("../../../Constants");
const MysticRemoraBase = require("../setMED/MysticRemora");

class MysticRemora extends MysticRemoraBase {
  constructor (game) {
    super(game, "Mystic Remora", "Ice Age", "ICE");
  }
}

module.exports = MysticRemora;
