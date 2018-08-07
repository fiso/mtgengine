"use strict";
const Constants = require ("../../../Constants");
const BearBase = require("../setTC15/Bear");

class Bear extends BearBase {
  constructor (game) {
    super(game, "Bear", "Magic Player Rewards 2001", "MPR");
  }
}

module.exports = Bear;
