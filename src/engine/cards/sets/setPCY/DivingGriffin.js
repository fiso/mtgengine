"use strict";
const Constants = require ("../../../Constants");
const DivingGriffinBase = require("../set8ED/DivingGriffin");

class DivingGriffin extends DivingGriffinBase {
  constructor (game) {
    super(game, "Diving Griffin", "Prophecy", "PCY");
  }
}

module.exports = DivingGriffin;
