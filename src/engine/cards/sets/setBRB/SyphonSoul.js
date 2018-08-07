"use strict";
const Constants = require ("../../../Constants");
const SyphonSoulBase = require("../setCNS/SyphonSoul");

class SyphonSoul extends SyphonSoulBase {
  constructor (game) {
    super(game, "Syphon Soul", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SyphonSoul;
