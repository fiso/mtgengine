"use strict";
const Constants = require ("../../../Constants");
const UnmakeBase = require("../setDDK/Unmake");

class Unmake extends UnmakeBase {
  constructor (game) {
    super(game, "Unmake", "Eventide", "EVE");
  }
}

module.exports = Unmake;
