"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpitaphGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Epitaph Golem", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EpitaphGolem;
