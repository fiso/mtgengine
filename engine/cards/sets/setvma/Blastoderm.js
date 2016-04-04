"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlastodermBase = require("../setDD3_GVL/Blastoderm.js");

class Blastoderm extends BlastodermBase {
  constructor(game) {
    super(game, "Blastoderm", "Vintage Masters", "VMA");
  }
}

module.exports = Blastoderm;
