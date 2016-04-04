"use strict";
const Constants = require ("../../../Constants");
const KarnLiberatedBase = require("../setMM2/KarnLiberated");

class KarnLiberated extends KarnLiberatedBase {
  constructor(game) {
    super(game, "Karn Liberated", "New Phyrexia", "NPH");
  }
}

module.exports = KarnLiberated;
