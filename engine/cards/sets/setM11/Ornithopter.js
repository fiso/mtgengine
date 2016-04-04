"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter.js");

class Ornithopter extends OrnithopterBase {
  constructor(game) {
    super(game, "Ornithopter", "Magic 2011", "M11");
  }
}

module.exports = Ornithopter;
