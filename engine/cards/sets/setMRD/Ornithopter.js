"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter.js");

class Ornithopter extends OrnithopterBase {
  constructor(game) {
    super(game, "Ornithopter", "Mirrodin", "MRD");
  }
}

module.exports = Ornithopter;
