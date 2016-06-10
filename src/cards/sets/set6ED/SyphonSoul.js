"use strict";
const Constants = require ("../../../Constants");
const SyphonSoulBase = require("../setBRB/SyphonSoul");

class SyphonSoul extends SyphonSoulBase {
  constructor (game) {
    super(game, "Syphon Soul", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SyphonSoul;
