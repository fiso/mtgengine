"use strict";
const Constants = require ("../../../Constants");
const MotherofRunesBase = require("../setCMA/MotherofRunes");

class MotherofRunes extends MotherofRunesBase {
  constructor (game) {
    super(game, "Mother of Runes", "Commander 2011", "CMD");
  }
}

module.exports = MotherofRunes;
