"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShapeshifterBase = require("../setATQ/Shapeshifter.js");

class Shapeshifter extends ShapeshifterBase {
  constructor(game) {
    super(game, "Shapeshifter", "Masters Edition IV", "ME4");
  }
}

module.exports = Shapeshifter;
