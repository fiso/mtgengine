"use strict";
const Constants = require ("../../../Constants");
const PhyrexianMetamorphBase = require("../setNPH/PhyrexianMetamorph");

class PhyrexianMetamorph extends PhyrexianMetamorphBase {
  constructor (game) {
    super(game, "Phyrexian Metamorph", "Magic Online Promos", "PRM");
  }
}

module.exports = PhyrexianMetamorph;
