"use strict";
const Constants = require ("../../../Constants");
const HelmofObedienceBase = require("../setALL/HelmofObedience");

class HelmofObedience extends HelmofObedienceBase {
  constructor(game) {
    super(game, "Helm of Obedience", "Masters Edition II", "ME2");
  }
}

module.exports = HelmofObedience;
