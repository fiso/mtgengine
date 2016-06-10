"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Stalking Vampire", "Innistrad", "ISD");
  }
}

module.exports = StalkingVampire;
