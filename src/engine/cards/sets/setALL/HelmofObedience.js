"use strict";
const Constants = require ("../../../Constants");
const HelmofObedienceBase = require("../setME2/HelmofObedience");

class HelmofObedience extends HelmofObedienceBase {
  constructor (game) {
    super(game, "Helm of Obedience", "Alliances", "ALL");
  }
}

module.exports = HelmofObedience;
