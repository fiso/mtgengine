"use strict";
const Constants = require ("../../../Constants");
const MirrorweaveBase = require("../setCM2/Mirrorweave");

class Mirrorweave extends MirrorweaveBase {
  constructor (game) {
    super(game, "Mirrorweave", "Commander 2016", "C16");
  }
}

module.exports = Mirrorweave;
