"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingCorpse extends UnimplementedCard {
  constructor(game) {
    super(game, "Walking Corpse", "Innistrad", "ISD");
  }
}

module.exports = WalkingCorpse;
