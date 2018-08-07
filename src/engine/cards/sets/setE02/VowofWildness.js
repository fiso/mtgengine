"use strict";
const Constants = require ("../../../Constants");
const VowofWildnessBase = require("../setC18/VowofWildness");

class VowofWildness extends VowofWildnessBase {
  constructor (game) {
    super(game, "Vow of Wildness", "Explorers of Ixalan", "E02");
  }
}

module.exports = VowofWildness;
