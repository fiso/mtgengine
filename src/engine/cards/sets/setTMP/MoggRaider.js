"use strict";
const Constants = require ("../../../Constants");
const MoggRaiderBase = require("../setATH/MoggRaider");

class MoggRaider extends MoggRaiderBase {
  constructor (game) {
    super(game, "Mogg Raider", "Tempest", "TMP");
  }
}

module.exports = MoggRaider;
