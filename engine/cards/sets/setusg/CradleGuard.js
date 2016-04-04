"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CradleGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Cradle Guard", "Urza's Saga", "USG");
  }
}

module.exports = CradleGuard;
