"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrnithopterBase = require("../setATQ/Ornithopter.js");

class Ornithopter extends OrnithopterBase {
  constructor(game) {
    super(game, "Ornithopter", "Magic 2010", "M10");
  }
}

module.exports = Ornithopter;
