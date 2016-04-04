"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExtraplanarLens extends Card {
  constructor(game) {
    super(game, "Extraplanar Lens", "Mirrodin", "MRD");
  }
}

module.exports = ExtraplanarLens;
