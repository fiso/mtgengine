"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Beast", "Gatecrash", "GTC");
  }
}

module.exports = EmberBeast;
