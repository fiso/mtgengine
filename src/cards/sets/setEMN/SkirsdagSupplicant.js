"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirsdagSupplicant extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirsdag Supplicant", "Eldritch Moon", "EMN");
  }
}

module.exports = SkirsdagSupplicant;
