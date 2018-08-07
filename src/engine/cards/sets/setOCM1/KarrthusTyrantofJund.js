"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarrthusTyrantofJund extends UnimplementedCard {
  constructor (game) {
    super(game, "Karrthus, Tyrant of Jund", "Commander's Arsenal Oversized", "OCM1");
  }
}

module.exports = KarrthusTyrantofJund;
