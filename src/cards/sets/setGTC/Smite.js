"use strict";
const Constants = require ("../../../Constants");
const SmiteBase = require("../setTPR/Smite");

class Smite extends SmiteBase {
  constructor (game) {
    super(game, "Smite", "Gatecrash", "GTC");
  }
}

module.exports = Smite;
