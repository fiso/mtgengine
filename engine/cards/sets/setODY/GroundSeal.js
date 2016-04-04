"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GroundSealBase = require("../setM13/GroundSeal.js");

class GroundSeal extends GroundSealBase {
  constructor(game) {
    super(game, "Ground Seal", "Odyssey", "ODY");
  }
}

module.exports = GroundSeal;
