"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrainFreezeBase = require("../setSCG/BrainFreeze.js");

class BrainFreeze extends BrainFreezeBase {
  constructor(game) {
    super(game, "Brain Freeze", "Vintage Masters", "VMA");
  }
}

module.exports = BrainFreeze;
