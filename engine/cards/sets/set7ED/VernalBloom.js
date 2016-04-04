"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VernalBloomBase = require("../set8ED/VernalBloom.js");

class VernalBloom extends VernalBloomBase {
  constructor(game) {
    super(game, "Vernal Bloom", "Seventh Edition", "7ED");
  }
}

module.exports = VernalBloom;
