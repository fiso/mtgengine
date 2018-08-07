"use strict";
const Constants = require ("../../../Constants");
const SplinterBase = require("../setBOK/Splinter");

class Splinter extends SplinterBase {
  constructor (game) {
    super(game, "Splinter", "Urza's Destiny", "UDS");
  }
}

module.exports = Splinter;
