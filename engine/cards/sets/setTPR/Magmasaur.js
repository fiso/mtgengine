"use strict";
const Constants = require ("../../../Constants");
const MagmasaurBase = require("../setTMP/Magmasaur");

class Magmasaur extends MagmasaurBase {
  constructor(game) {
    super(game, "Magmasaur", "Tempest Remastered", "TPR");
  }
}

module.exports = Magmasaur;
