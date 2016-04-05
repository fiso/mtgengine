"use strict";
const Constants = require ("../../../Constants");
const MotherofRunesBase = require("../setDDO/MotherofRunes");

class MotherofRunes extends MotherofRunesBase {
  constructor(game) {
    super(game, "Mother of Runes", "Urza's Legacy", "ULG");
  }
}

module.exports = MotherofRunes;
