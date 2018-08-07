"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrangeAugmentation extends UnimplementedCard {
  constructor (game) {
    super(game, "Strange Augmentation", "Eldritch Moon", "EMN");
  }
}

module.exports = StrangeAugmentation;
