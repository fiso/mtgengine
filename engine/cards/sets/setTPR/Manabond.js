"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManabondBase = require("../setEXO/Manabond.js");

class Manabond extends ManabondBase {
  constructor(game) {
    super(game, "Manabond", "Tempest Remastered", "TPR");
  }
}

module.exports = Manabond;
