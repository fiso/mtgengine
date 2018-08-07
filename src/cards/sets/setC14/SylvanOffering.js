"use strict";
const Constants = require ("../../../Constants");
const SylvanOfferingBase = require("../setCMA/SylvanOffering");

class SylvanOffering extends SylvanOfferingBase {
  constructor (game) {
    super(game, "Sylvan Offering", "Commander 2014", "C14");
  }
}

module.exports = SylvanOffering;
