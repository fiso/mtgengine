"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalSpringBase = require("../setDPA/NaturalSpring.js");

class NaturalSpring extends NaturalSpringBase {
  constructor(game) {
    super(game, "Natural Spring", "Portal", "POR");
  }
}

module.exports = NaturalSpring;
