"use strict";
const Constants = require ("../../../Constants");
const MetamorphosisBase = require("../setPZ2/Metamorphosis");

class Metamorphosis extends MetamorphosisBase {
  constructor (game) {
    super(game, "Metamorphosis", "Arabian Nights", "ARN");
  }
}

module.exports = Metamorphosis;
