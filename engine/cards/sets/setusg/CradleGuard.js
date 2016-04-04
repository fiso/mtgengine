"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CradleGuard extends Card {
  constructor(game) {
    super(game, "Cradle Guard", "Urza's Saga", "USG");
  }
}

module.exports = CradleGuard;
