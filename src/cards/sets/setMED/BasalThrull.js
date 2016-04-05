"use strict";
const Constants = require ("../../../Constants");
const BasalThrullBase = require("../setFEM/BasalThrull");

class BasalThrull extends BasalThrullBase {
  constructor(game) {
    super(game, "Basal Thrull", "Masters Edition", "MED");
  }
}

module.exports = BasalThrull;
