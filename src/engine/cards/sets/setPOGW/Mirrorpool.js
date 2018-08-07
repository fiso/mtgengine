"use strict";
const Constants = require ("../../../Constants");
const MirrorpoolBase = require("../setOGW/Mirrorpool");

class Mirrorpool extends MirrorpoolBase {
  constructor (game) {
    super(game, "Mirrorpool", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = Mirrorpool;
