"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenStag extends UnimplementedCard {
  constructor(game) {
    super(game, "Hidden Stag", "Urza's Saga", "USG");
  }
}

module.exports = HiddenStag;
