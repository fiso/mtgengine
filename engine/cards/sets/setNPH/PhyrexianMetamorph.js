"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianMetamorphBase = require("../setpLPA/PhyrexianMetamorph.js");

class PhyrexianMetamorph extends PhyrexianMetamorphBase {
  constructor(game) {
    super(game, "Phyrexian Metamorph", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianMetamorph;
