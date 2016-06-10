"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberHauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Hauler", "Magic 2011", "M11");
  }
}

module.exports = EmberHauler;
