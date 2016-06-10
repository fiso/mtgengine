"use strict";
const Constants = require ("../../../Constants");
const FodderCannonBase = require("../set8ED/FodderCannon");

class FodderCannon extends FodderCannonBase {
  constructor (game) {
    super(game, "Fodder Cannon", "Urza's Destiny", "UDS");
  }
}

module.exports = FodderCannon;
