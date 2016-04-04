"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaDrainBase = require("../setLEG/ManaDrain.js");

class ManaDrain extends ManaDrainBase {
  constructor(game) {
    super(game, "Mana Drain", "Vintage Masters", "VMA");
  }
}

module.exports = ManaDrain;
