"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindSpringBase = require("../setDPA/MindSpring.js");

class MindSpring extends MindSpringBase {
  constructor(game) {
    super(game, "Mind Spring", "Morningtide", "MOR");
  }
}

module.exports = MindSpring;
