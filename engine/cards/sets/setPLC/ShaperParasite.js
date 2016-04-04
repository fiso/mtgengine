"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShaperParasiteBase = require("../setC14/ShaperParasite.js");

class ShaperParasite extends ShaperParasiteBase {
  constructor(game) {
    super(game, "Shaper Parasite", "Planar Chaos", "PLC");
  }
}

module.exports = ShaperParasite;
