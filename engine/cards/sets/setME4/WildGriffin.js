"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildGriffinBase = require("../setM11/WildGriffin.js");

class WildGriffin extends WildGriffinBase {
  constructor(game) {
    super(game, "Wild Griffin", "Masters Edition IV", "ME4");
  }
}

module.exports = WildGriffin;
