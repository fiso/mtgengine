"use strict";
const Constants = require ("../../../Constants");
const MirrodinsCoreBase = require("../setCNS/MirrodinsCore");

class MirrodinsCore extends MirrodinsCoreBase {
  constructor (game) {
    super(game, "Mirrodin's Core", "Darksteel", "DST");
  }
}

module.exports = MirrodinsCore;
