"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnyaroGriffinBase = require("../set6ED/UnyaroGriffin.js");

class UnyaroGriffin extends UnyaroGriffinBase {
  constructor(game) {
    super(game, "Unyaro Griffin", "Mirage", "MIR");
  }
}

module.exports = UnyaroGriffin;
