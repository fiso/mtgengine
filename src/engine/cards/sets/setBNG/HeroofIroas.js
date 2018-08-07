"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroofIroas extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero of Iroas", "Born of the Gods", "BNG");
  }
}

module.exports = HeroofIroas;
