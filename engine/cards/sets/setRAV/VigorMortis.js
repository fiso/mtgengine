"use strict";
const Constants = require ("../../../Constants");
const VigorMortisBase = require("../setDDJ/VigorMortis");

class VigorMortis extends VigorMortisBase {
  constructor(game) {
    super(game, "Vigor Mortis", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VigorMortis;
