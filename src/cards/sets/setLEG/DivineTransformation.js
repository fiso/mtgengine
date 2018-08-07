"use strict";
const Constants = require ("../../../Constants");
const DivineTransformationBase = require("../setMED/DivineTransformation");

class DivineTransformation extends DivineTransformationBase {
  constructor (game) {
    super(game, "Divine Transformation", "Legends", "LEG");
  }
}

module.exports = DivineTransformation;
