"use strict";
const Constants = require ("../../../Constants");
const TerminusBase = require("../setC18/Terminus");

class Terminus extends TerminusBase {
  constructor (game) {
    super(game, "Terminus", "From the Vault: Annihilation", "V14");
  }
}

module.exports = Terminus;
