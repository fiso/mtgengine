"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmoredGriffinBase = require("../setME2/ArmoredGriffin.js");

class ArmoredGriffin extends ArmoredGriffinBase {
  constructor(game) {
    super(game, "Armored Griffin", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ArmoredGriffin;
