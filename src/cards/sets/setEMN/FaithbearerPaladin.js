"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithbearerPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Faithbearer Paladin", "Eldritch Moon", "EMN");
  }
}

module.exports = FaithbearerPaladin;
