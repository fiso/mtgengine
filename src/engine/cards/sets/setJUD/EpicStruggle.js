"use strict";
const Constants = require ("../../../Constants");
const EpicStruggleBase = require("../setPRM/EpicStruggle");

class EpicStruggle extends EpicStruggleBase {
  constructor (game) {
    super(game, "Epic Struggle", "Judgment", "JUD");
  }
}

module.exports = EpicStruggle;
