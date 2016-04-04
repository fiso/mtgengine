"use strict";
const Constants = require ("../../../Constants");
const NaturalSpringBase = require("../setDPA/NaturalSpring");

class NaturalSpring extends NaturalSpringBase {
  constructor(game) {
    super(game, "Natural Spring", "Ninth Edition", "9ED");
  }
}

module.exports = NaturalSpring;
