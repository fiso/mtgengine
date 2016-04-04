"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChimneyImp extends Card {
  constructor(game) {
    super(game, "Chimney Imp", "Mirrodin", "MRD");
  }
}

module.exports = ChimneyImp;
