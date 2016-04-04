"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmaGiantBase = require("../setC15/MagmaGiant.js");

class MagmaGiant extends MagmaGiantBase {
  constructor(game) {
    super(game, "Magma Giant", "Fifth Dawn", "5DN");
  }
}

module.exports = MagmaGiant;
