"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MetamorphosisBase = require("../setARN/Metamorphosis.js");

class Metamorphosis extends MetamorphosisBase {
  constructor(game) {
    super(game, "Metamorphosis", "Chronicles", "CHR");
  }
}

module.exports = Metamorphosis;
