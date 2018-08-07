"use strict";
const Constants = require ("../../../Constants");
const PhyrexianMetamorphBase = require("../setNPH/PhyrexianMetamorph");

class PhyrexianMetamorph extends PhyrexianMetamorphBase {
  constructor (game) {
    super(game, "Phyrexian Metamorph", "New Phyrexia Promos", "PNPH");
  }
}

module.exports = PhyrexianMetamorph;
