"use strict";
const Constants = require ("../../../Constants");
const NecropotenceBase = require("../setIMA/Necropotence");

class Necropotence extends NecropotenceBase {
  constructor (game) {
    super(game, "Necropotence", "From the Vault: Exiled", "V09");
  }
}

module.exports = Necropotence;
