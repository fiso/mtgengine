"use strict";
const Constants = require ("../../../Constants");
const MulchBase = require("../setC15/Mulch");

class Mulch extends MulchBase {
  constructor (game) {
    super(game, "Mulch", "Tempest Remastered", "TPR");
  }
}

module.exports = Mulch;
