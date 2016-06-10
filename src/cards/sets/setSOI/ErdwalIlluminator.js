"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErdwalIlluminator extends UnimplementedCard {
  constructor (game) {
    super(game, "Erdwal Illuminator", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ErdwalIlluminator;
