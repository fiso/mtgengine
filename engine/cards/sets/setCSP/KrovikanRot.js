"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrovikanRot extends Card {
  constructor(game) {
    super(game, "Krovikan Rot", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanRot;
