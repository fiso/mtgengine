"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtraplanarLens extends UnimplementedCard {
  constructor (game) {
    super(game, "Extraplanar Lens", "Mirrodin", "MRD");
  }
}

module.exports = ExtraplanarLens;
