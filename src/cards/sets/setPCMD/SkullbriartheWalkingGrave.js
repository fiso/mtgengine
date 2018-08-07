"use strict";
const Constants = require ("../../../Constants");
const SkullbriartheWalkingGraveBase = require("../setCM2/SkullbriartheWalkingGrave");

class SkullbriartheWalkingGrave extends SkullbriartheWalkingGraveBase {
  constructor (game) {
    super(game, "Skullbriar, the Walking Grave", "Commander 2011 Launch Party", "PCMD");
  }
}

module.exports = SkullbriartheWalkingGrave;
