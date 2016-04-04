"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberBeast extends Card {
  constructor(game) {
    super(game, "Ember Beast", "Gatecrash", "GTC");
  }
}

module.exports = EmberBeast;
