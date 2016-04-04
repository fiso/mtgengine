"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunderingTitanBase = require("../setARC/SunderingTitan.js");

class SunderingTitan extends SunderingTitanBase {
  constructor(game) {
    super(game, "Sundering Titan", "Darksteel", "DST");
  }
}

module.exports = SunderingTitan;
