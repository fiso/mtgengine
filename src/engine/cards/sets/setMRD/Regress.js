"use strict";
const Constants = require ("../../../Constants");
const RegressBase = require("../setROE/Regress");

class Regress extends RegressBase {
  constructor (game) {
    super(game, "Regress", "Mirrodin", "MRD");
  }
}

module.exports = Regress;
