"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EkunduGriffinBase = require("../set6ED/EkunduGriffin.js");

class EkunduGriffin extends EkunduGriffinBase {
  constructor(game) {
    super(game, "Ekundu Griffin", "Mirage", "MIR");
  }
}

module.exports = EkunduGriffin;
