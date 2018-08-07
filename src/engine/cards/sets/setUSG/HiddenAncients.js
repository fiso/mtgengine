"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenAncients extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Ancients", "Urza's Saga", "USG");
  }
}

module.exports = HiddenAncients;
