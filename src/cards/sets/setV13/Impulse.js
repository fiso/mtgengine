"use strict";
const Constants = require ("../../../Constants");
const ImpulseBase = require("../setBTD/Impulse");

class Impulse extends ImpulseBase {
  constructor (game) {
    super(game, "Impulse", "From the Vault: Twenty", "V13");
  }
}

module.exports = Impulse;
