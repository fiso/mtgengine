"use strict";
const Constants = require ("../../../Constants");
const OpentheVaultsBase = require("../setC16/OpentheVaults");

class OpentheVaults extends OpentheVaultsBase {
  constructor (game) {
    super(game, "Open the Vaults", "Commander 2015", "C15");
  }
}

module.exports = OpentheVaults;
