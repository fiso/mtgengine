"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaddeningImp extends Card {
  constructor(game) {
    super(game, "Maddening Imp", "Tempest", "TMP");
  }
}

module.exports = MaddeningImp;
