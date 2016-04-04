"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalSpringBase = require("../setDPA/NaturalSpring.js");

class NaturalSpring extends NaturalSpringBase {
  constructor(game) {
    super(game, "Natural Spring", "Starter 1999", "S99");
  }
}

module.exports = NaturalSpring;
