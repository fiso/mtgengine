"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistmoonGriffinBase = require("../setVMA/MistmoonGriffin.js");

class MistmoonGriffin extends MistmoonGriffinBase {
  constructor(game) {
    super(game, "Mistmoon Griffin", "Weatherlight", "WTH");
  }
}

module.exports = MistmoonGriffin;
