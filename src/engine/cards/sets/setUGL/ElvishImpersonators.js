"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishImpersonators extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Impersonators", "Unglued", "UGL");
  }
}

module.exports = ElvishImpersonators;
