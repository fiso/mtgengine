"use strict";
const Constants = require ("../../../Constants");
const MetamorphosisBase = require("../setARN/Metamorphosis");

class Metamorphosis extends MetamorphosisBase {
  constructor (game) {
    super(game, "Metamorphosis", "Chronicles", "CHR");
  }
}

module.exports = Metamorphosis;
