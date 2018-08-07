"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarmlessOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Harmless Offering", "Eldritch Moon", "EMN");
  }
}

module.exports = HarmlessOffering;
