"use strict";
const Constants = require ("../../../Constants");
const FistsoftheAnvilBase = require("../setMRD/FistsoftheAnvil");

class FistsoftheAnvil extends FistsoftheAnvilBase {
  constructor(game) {
    super(game, "Fists of the Anvil", "Tenth Edition", "10E");
  }
}

module.exports = FistsoftheAnvil;
