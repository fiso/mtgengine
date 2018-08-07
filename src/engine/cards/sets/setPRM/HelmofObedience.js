"use strict";
const Constants = require ("../../../Constants");
const HelmofObedienceBase = require("../setME2/HelmofObedience");

class HelmofObedience extends HelmofObedienceBase {
  constructor (game) {
    super(game, "Helm of Obedience", "Magic Online Promos", "PRM");
  }
}

module.exports = HelmofObedience;
