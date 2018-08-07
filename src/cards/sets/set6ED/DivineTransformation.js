"use strict";
const Constants = require ("../../../Constants");
const DivineTransformationBase = require("../setMED/DivineTransformation");

class DivineTransformation extends DivineTransformationBase {
  constructor (game) {
    super(game, "Divine Transformation", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DivineTransformation;
