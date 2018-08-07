"use strict";
const Constants = require ("../../../Constants");
const UnstableObeliskBase = require("../setC18/UnstableObelisk");

class UnstableObelisk extends UnstableObeliskBase {
  constructor (game) {
    super(game, "Unstable Obelisk", "Commander 2014", "C14");
  }
}

module.exports = UnstableObelisk;
