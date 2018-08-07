"use strict";
const Constants = require ("../../../Constants");
const BearBase = require("../setTC15/Bear");

class Bear extends BearBase {
  constructor (game) {
    super(game, "Bear", "Magic Player Rewards 2003", "P03");
  }
}

module.exports = Bear;
