"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VecTownshipsBase = require("../setBRB/VecTownships.js");

class VecTownships extends VecTownshipsBase {
  constructor(game) {
    super(game, "Vec Townships", "Tempest", "TMP");
  }
}

module.exports = VecTownships;
