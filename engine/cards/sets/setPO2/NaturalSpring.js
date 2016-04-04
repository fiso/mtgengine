"use strict";
const Constants = require ("../../../Constants");
const NaturalSpringBase = require("../setDPA/NaturalSpring");

class NaturalSpring extends NaturalSpringBase {
  constructor(game) {
    super(game, "Natural Spring", "Portal Second Age", "PO2");
  }
}

module.exports = NaturalSpring;
