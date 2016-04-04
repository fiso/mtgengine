"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrSuperionBase = require("../setpMGD/MyrSuperion.js");

class MyrSuperion extends MyrSuperionBase {
  constructor(game) {
    super(game, "Myr Superion", "New Phyrexia", "NPH");
  }
}

module.exports = MyrSuperion;
