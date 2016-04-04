"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberWeaver extends Card {
  constructor(game) {
    super(game, "Ember Weaver", "Conflux", "CON");
  }
}

module.exports = EmberWeaver;
