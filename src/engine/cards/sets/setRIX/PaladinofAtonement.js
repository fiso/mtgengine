"use strict";
const Constants = require ("../../../Constants");
const PaladinofAtonementBase = require("../setPRIX/PaladinofAtonement");

class PaladinofAtonement extends PaladinofAtonementBase {
  constructor (game) {
    super(game, "Paladin of Atonement", "Rivals of Ixalan", "RIX");
  }
}

module.exports = PaladinofAtonement;
