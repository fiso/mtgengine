"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LowlandGiantBase = require("../setBTD/LowlandGiant.js");

class LowlandGiant extends LowlandGiantBase {
  constructor(game) {
    super(game, "Lowland Giant", "Tempest Remastered", "TPR");
  }
}

module.exports = LowlandGiant;
