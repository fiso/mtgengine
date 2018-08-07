"use strict";
const Constants = require ("../../../Constants");
const BearBase = require("../setTC15/Bear");

class Bear extends BearBase {
  constructor (game) {
    super(game, "Bear", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = Bear;
