"use strict";
const Constants = require ("../../../Constants");
const SorcerersStrongboxBase = require("../setARC/SorcerersStrongbox");

class SorcerersStrongbox extends SorcerersStrongboxBase {
  constructor(game) {
    super(game, "Sorcerer's Strongbox", "Magic 2011", "M11");
  }
}

module.exports = SorcerersStrongbox;
