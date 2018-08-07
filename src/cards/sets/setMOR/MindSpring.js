"use strict";
const Constants = require ("../../../Constants");
const MindSpringBase = require("../setDDT/MindSpring");

class MindSpring extends MindSpringBase {
  constructor (game) {
    super(game, "Mind Spring", "Morningtide", "MOR");
  }
}

module.exports = MindSpring;
