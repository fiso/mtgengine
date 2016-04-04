"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivineTransformationBase = require("../set6ED/DivineTransformation.js");

class DivineTransformation extends DivineTransformationBase {
  constructor(game) {
    super(game, "Divine Transformation", "Legends", "LEG");
  }
}

module.exports = DivineTransformation;
