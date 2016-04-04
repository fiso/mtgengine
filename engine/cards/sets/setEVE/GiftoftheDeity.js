"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftoftheDeity extends UnimplementedCard {
  constructor(game) {
    super(game, "Gift of the Deity", "Eventide", "EVE");
  }
}

module.exports = GiftoftheDeity;
