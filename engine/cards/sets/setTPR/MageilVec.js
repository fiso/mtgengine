"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MageilVecBase = require("../setEXO/MageilVec.js");

class MageilVec extends MageilVecBase {
  constructor(game) {
    super(game, "Mage il-Vec", "Tempest Remastered", "TPR");
  }
}

module.exports = MageilVec;
