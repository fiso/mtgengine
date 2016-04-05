"use strict";
const Constants = require ("../../../Constants");
const MindSpringBase = require("../setDPA/MindSpring");

class MindSpring extends MindSpringBase {
  constructor(game) {
    super(game, "Mind Spring", "Magic 2010", "M10");
  }
}

module.exports = MindSpring;
