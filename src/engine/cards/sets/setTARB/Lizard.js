"use strict";
const Constants = require ("../../../Constants");
const LizardBase = require("../setTCN2/Lizard");

class Lizard extends LizardBase {
  constructor (game) {
    super(game, "Lizard", "Alara Reborn Tokens", "TARB");
  }
}

module.exports = Lizard;
