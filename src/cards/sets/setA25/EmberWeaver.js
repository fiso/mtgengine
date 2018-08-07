"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Weaver", "Masters 25", "A25");
  }
}

module.exports = EmberWeaver;
