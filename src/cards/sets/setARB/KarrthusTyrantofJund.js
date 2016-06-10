"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarrthusTyrantofJund extends UnimplementedCard {
  constructor (game) {
    super(game, "Karrthus, Tyrant of Jund", "Alara Reborn", "ARB");
  }
}

module.exports = KarrthusTyrantofJund;
