"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SyphonSoulBase = require("../setBRB/SyphonSoul.js");

class SyphonSoul extends SyphonSoulBase {
  constructor(game) {
    super(game, "Syphon Soul", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SyphonSoul;
