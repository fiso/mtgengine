"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientStirrings extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Stirrings", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = AncientStirrings;
