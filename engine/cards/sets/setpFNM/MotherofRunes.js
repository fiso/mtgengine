"use strict";
const Constants = require ("../../../Constants");
const MotherofRunesBase = require("../setDDO/MotherofRunes");

class MotherofRunes extends MotherofRunesBase {
  constructor(game) {
    super(game, "Mother of Runes", "Friday Night Magic", "pFNM");
  }
}

module.exports = MotherofRunes;
