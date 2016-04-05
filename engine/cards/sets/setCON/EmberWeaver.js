"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Ember Weaver", "Conflux", "CON");
  }
}

module.exports = EmberWeaver;
