"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BasalThrullBase = require("../setFEM/BasalThrull.js");

class BasalThrull extends BasalThrullBase {
  constructor(game) {
    super(game, "Basal Thrull", "Masters Edition", "MED");
  }
}

module.exports = BasalThrull;
