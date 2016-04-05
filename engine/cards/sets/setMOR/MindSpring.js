"use strict";
const Constants = require ("../../../Constants");
const MindSpringBase = require("../setDPA/MindSpring");

class MindSpring extends MindSpringBase {
  constructor(game) {
    super(game, "Mind Spring", "Morningtide", "MOR");
  }
}

module.exports = MindSpring;
