"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RingofMarfBase = require("../setARN/RingofMarf.js");

class RingofMarf extends RingofMarfBase {
  constructor(game) {
    super(game, "Ring of Ma'rûf", "Masters Edition", "MED");
  }
}

module.exports = RingofMarf;
