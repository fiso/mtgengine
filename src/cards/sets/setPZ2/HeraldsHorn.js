"use strict";
const Constants = require ("../../../Constants");
const HeraldsHornBase = require("../setC17/HeraldsHorn");

class HeraldsHorn extends HeraldsHornBase {
  constructor (game) {
    super(game, "Herald's Horn", "You Make the Cube", "PZ2");
  }
}

module.exports = HeraldsHorn;
