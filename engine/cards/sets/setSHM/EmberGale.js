"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberGale extends Card {
  constructor(game) {
    super(game, "Ember Gale", "Shadowmoor", "SHM");
  }
}

module.exports = EmberGale;
