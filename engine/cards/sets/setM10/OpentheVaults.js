"use strict";
const Constants = require ("../../../Constants");
const OpentheVaultsBase = require("../setC15/OpentheVaults");

class OpentheVaults extends OpentheVaultsBase {
  constructor(game) {
    super(game, "Open the Vaults", "Magic 2010", "M10");
  }
}

module.exports = OpentheVaults;
