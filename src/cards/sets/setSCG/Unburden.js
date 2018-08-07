"use strict";
const Constants = require ("../../../Constants");
const UnburdenBase = require("../setAKH/Unburden");

class Unburden extends UnburdenBase {
  constructor (game) {
    super(game, "Unburden", "Scourge", "SCG");
  }
}

module.exports = Unburden;
