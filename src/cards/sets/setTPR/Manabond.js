"use strict";
const Constants = require ("../../../Constants");
const ManabondBase = require("../setEXO/Manabond");

class Manabond extends ManabondBase {
  constructor(game) {
    super(game, "Manabond", "Tempest Remastered", "TPR");
  }
}

module.exports = Manabond;
