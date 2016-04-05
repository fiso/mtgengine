"use strict";
const Constants = require ("../../../Constants");
const DivineTransformationBase = require("../set6ED/DivineTransformation");

class DivineTransformation extends DivineTransformationBase {
  constructor(game) {
    super(game, "Divine Transformation", "Masters Edition", "MED");
  }
}

module.exports = DivineTransformation;
