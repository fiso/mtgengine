"use strict";
const Constants = require ("../../../Constants");
const UnmakeBase = require("../setDDK/Unmake");

class Unmake extends UnmakeBase {
  constructor (game) {
    super(game, "Unmake", "Magic Player Rewards 2009", "P09");
  }
}

module.exports = Unmake;
