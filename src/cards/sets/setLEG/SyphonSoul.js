"use strict";
const Constants = require ("../../../Constants");
const SyphonSoulBase = require("../setCNS/SyphonSoul");

class SyphonSoul extends SyphonSoulBase {
  constructor (game) {
    super(game, "Syphon Soul", "Legends", "LEG");
  }
}

module.exports = SyphonSoul;
