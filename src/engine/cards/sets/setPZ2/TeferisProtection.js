"use strict";
const Constants = require ("../../../Constants");
const TeferisProtectionBase = require("../setC17/TeferisProtection");

class TeferisProtection extends TeferisProtectionBase {
  constructor (game) {
    super(game, "Teferi's Protection", "You Make the Cube", "PZ2");
  }
}

module.exports = TeferisProtection;
