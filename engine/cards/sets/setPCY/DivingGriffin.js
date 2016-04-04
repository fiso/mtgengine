"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivingGriffinBase = require("../set8ED/DivingGriffin.js");

class DivingGriffin extends DivingGriffinBase {
  constructor(game) {
    super(game, "Diving Griffin", "Prophecy", "PCY");
  }
}

module.exports = DivingGriffin;
