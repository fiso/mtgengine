"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SisaysRingBase = require("../set7ED/SisaysRing.js");

class SisaysRing extends SisaysRingBase {
  constructor(game) {
    super(game, "Sisay's Ring", "Visions", "VIS");
  }
}

module.exports = SisaysRing;
