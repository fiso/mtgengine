"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpitaphGolem extends Card {
  constructor(game) {
    super(game, "Epitaph Golem", "Shadows over Innistrad", "SOI");
  }
}

module.exports = EpitaphGolem;
