"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimalRageBase = require("../setSTH/PrimalRage.js");

class PrimalRage extends PrimalRageBase {
  constructor(game) {
    super(game, "Primal Rage", "Tenth Edition", "10E");
  }
}

module.exports = PrimalRage;
