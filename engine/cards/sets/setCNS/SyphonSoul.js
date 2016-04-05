"use strict";
const Constants = require ("../../../Constants");
const SyphonSoulBase = require("../setBRB/SyphonSoul");

class SyphonSoul extends SyphonSoulBase {
  constructor(game) {
    super(game, "Syphon Soul", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SyphonSoul;
