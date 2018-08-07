"use strict";
const Constants = require ("../../../Constants");
const UnstableObeliskBase = require("../setC18/UnstableObelisk");

class UnstableObelisk extends UnstableObeliskBase {
  constructor (game) {
    super(game, "Unstable Obelisk", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = UnstableObelisk;
