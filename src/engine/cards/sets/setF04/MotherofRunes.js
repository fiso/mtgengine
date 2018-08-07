"use strict";
const Constants = require ("../../../Constants");
const MotherofRunesBase = require("../setCMA/MotherofRunes");

class MotherofRunes extends MotherofRunesBase {
  constructor (game) {
    super(game, "Mother of Runes", "Friday Night Magic 2004", "F04");
  }
}

module.exports = MotherofRunes;
