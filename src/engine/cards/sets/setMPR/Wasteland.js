"use strict";
const Constants = require ("../../../Constants");
const WastelandBase = require("../setEMA/Wasteland");

class Wasteland extends WastelandBase {
  constructor (game) {
    super(game, "Wasteland", "Magic Player Rewards 2001", "MPR");
  }
}

module.exports = Wasteland;
