"use strict";
const Constants = require ("../../../Constants");
const UnlicensedDisintegrationBase = require("../setF17/UnlicensedDisintegration");

class UnlicensedDisintegration extends UnlicensedDisintegrationBase {
  constructor (game) {
    super(game, "Unlicensed Disintegration", "Kaladesh", "KLD");
  }
}

module.exports = UnlicensedDisintegration;
