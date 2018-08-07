"use strict";
const Constants = require ("../../../Constants");
const BefuddleBase = require("../setM19/Befuddle");

class Befuddle extends BefuddleBase {
  constructor (game) {
    super(game, "Befuddle", "Dominaria", "DOM");
  }
}

module.exports = Befuddle;
