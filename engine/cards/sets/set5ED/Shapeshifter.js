"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShapeshifterBase = require("../setATQ/Shapeshifter.js");

class Shapeshifter extends ShapeshifterBase {
  constructor(game) {
    super(game, "Shapeshifter", "Fifth Edition", "5ED");
  }
}

module.exports = Shapeshifter;
