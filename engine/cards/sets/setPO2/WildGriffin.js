"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildGriffinBase = require("../setM11/WildGriffin.js");

class WildGriffin extends WildGriffinBase {
  constructor(game) {
    super(game, "Wild Griffin", "Portal Second Age", "PO2");
  }
}

module.exports = WildGriffin;
