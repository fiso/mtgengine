"use strict";
const Constants = require ("../../../Constants");
const CounterboreBase = require("../setDPA/Counterbore");

class Counterbore extends CounterboreBase {
  constructor (game) {
    super(game, "Counterbore", "Shadowmoor", "SHM");
  }
}

module.exports = Counterbore;
