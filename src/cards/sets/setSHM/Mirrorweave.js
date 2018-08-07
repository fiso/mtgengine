"use strict";
const Constants = require ("../../../Constants");
const MirrorweaveBase = require("../setCM2/Mirrorweave");

class Mirrorweave extends MirrorweaveBase {
  constructor (game) {
    super(game, "Mirrorweave", "Shadowmoor", "SHM");
  }
}

module.exports = Mirrorweave;
