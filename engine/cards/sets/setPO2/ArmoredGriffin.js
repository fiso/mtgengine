"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmoredGriffinBase = require("../setME2/ArmoredGriffin.js");

class ArmoredGriffin extends ArmoredGriffinBase {
  constructor(game) {
    super(game, "Armored Griffin", "Portal Second Age", "PO2");
  }
}

module.exports = ArmoredGriffin;
