"use strict";
const Constants = require ("../../../Constants");
const MistmoonGriffinBase = require("../setVMA/MistmoonGriffin");

class MistmoonGriffin extends MistmoonGriffinBase {
  constructor(game) {
    super(game, "Mistmoon Griffin", "Weatherlight", "WTH");
  }
}

module.exports = MistmoonGriffin;
