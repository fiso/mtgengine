"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HollowDogs extends Card {
  constructor(game) {
    super(game, "Hollow Dogs", "Beatdown Box Set", "BTD");
  }
}

module.exports = HollowDogs;
