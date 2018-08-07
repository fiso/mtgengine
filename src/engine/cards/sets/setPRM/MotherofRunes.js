"use strict";
const Constants = require ("../../../Constants");
const MotherofRunesBase = require("../setCMA/MotherofRunes");

class MotherofRunes extends MotherofRunesBase {
  constructor (game) {
    super(game, "Mother of Runes", "Magic Online Promos", "PRM");
  }
}

module.exports = MotherofRunes;
