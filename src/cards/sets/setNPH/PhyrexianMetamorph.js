"use strict";
const Constants = require ("../../../Constants");
const PhyrexianMetamorphBase = require("../setpLPA/PhyrexianMetamorph");

class PhyrexianMetamorph extends PhyrexianMetamorphBase {
  constructor(game) {
    super(game, "Phyrexian Metamorph", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianMetamorph;
