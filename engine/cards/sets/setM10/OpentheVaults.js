"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OpentheVaultsBase = require("../setC15/OpentheVaults.js");

class OpentheVaults extends OpentheVaultsBase {
  constructor(game) {
    super(game, "Open the Vaults", "Magic 2010", "M10");
  }
}

module.exports = OpentheVaults;
