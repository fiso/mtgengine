"use strict";
const Constants = require ("../../../Constants");
const SorcerersStrongboxBase = require("../setM11/SorcerersStrongbox");

class SorcerersStrongbox extends SorcerersStrongboxBase {
  constructor (game) {
    super(game, "Sorcerer's Strongbox", "Archenemy", "ARC");
  }
}

module.exports = SorcerersStrongbox;
