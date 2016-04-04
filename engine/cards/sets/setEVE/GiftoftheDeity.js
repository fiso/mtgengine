"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftoftheDeity extends Card {
  constructor(game) {
    super(game, "Gift of the Deity", "Eventide", "EVE");
  }
}

module.exports = GiftoftheDeity;
