"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishGuidance extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Guidance", "Onslaught", "ONS");
  }
}

module.exports = ElvishGuidance;
