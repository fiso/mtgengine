"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberHauler extends Card {
  constructor(game) {
    super(game, "Ember Hauler", "Magic 2011", "M11");
  }
}

module.exports = EmberHauler;
