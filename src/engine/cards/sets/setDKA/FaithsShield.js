"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithsShield extends UnimplementedCard {
  constructor (game) {
    super(game, "Faith's Shield", "Dark Ascension", "DKA");
  }
}

module.exports = FaithsShield;
