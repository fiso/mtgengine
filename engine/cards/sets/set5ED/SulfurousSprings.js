"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SulfurousSpringsBase = require("../set6ED/SulfurousSprings.js");

class SulfurousSprings extends SulfurousSpringsBase {
  constructor(game) {
    super(game, "Sulfurous Springs", "Fifth Edition", "5ED");
  }
}

module.exports = SulfurousSprings;
