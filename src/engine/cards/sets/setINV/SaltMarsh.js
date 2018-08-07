"use strict";
const Constants = require ("../../../Constants");
const SaltMarshBase = require("../set8ED/SaltMarsh");

class SaltMarsh extends SaltMarshBase {
  constructor (game) {
    super(game, "Salt Marsh", "Invasion", "INV");
  }
}

module.exports = SaltMarsh;
