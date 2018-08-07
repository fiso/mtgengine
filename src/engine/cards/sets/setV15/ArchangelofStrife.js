"use strict";
const Constants = require ("../../../Constants");
const ArchangelofStrifeBase = require("../setCMA/ArchangelofStrife");

class ArchangelofStrife extends ArchangelofStrifeBase {
  constructor (game) {
    super(game, "Archangel of Strife", "From the Vault: Angels", "V15");
  }
}

module.exports = ArchangelofStrife;
