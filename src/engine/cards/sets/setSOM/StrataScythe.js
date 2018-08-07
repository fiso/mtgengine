"use strict";
const Constants = require ("../../../Constants");
const StrataScytheBase = require("../setC14/StrataScythe");

class StrataScythe extends StrataScytheBase {
  constructor (game) {
    super(game, "Strata Scythe", "Scars of Mirrodin", "SOM");
  }
}

module.exports = StrataScythe;
