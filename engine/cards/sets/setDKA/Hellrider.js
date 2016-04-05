"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hellrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellrider", "Dark Ascension", "DKA");
  }
}

module.exports = Hellrider;
