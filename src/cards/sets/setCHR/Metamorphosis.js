"use strict";
const Constants = require ("../../../Constants");
const MetamorphosisBase = require("../setPZ2/Metamorphosis");

class Metamorphosis extends MetamorphosisBase {
  constructor (game) {
    super(game, "Metamorphosis", "Chronicles", "CHR");
  }
}

module.exports = Metamorphosis;
