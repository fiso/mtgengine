"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SynodCenturion extends UnimplementedCard {
  constructor (game) {
    super(game, "Synod Centurion", "Archenemy", "ARC");
  }
}

module.exports = SynodCenturion;
