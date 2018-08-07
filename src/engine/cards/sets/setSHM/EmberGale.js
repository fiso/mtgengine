"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberGale extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Gale", "Shadowmoor", "SHM");
  }
}

module.exports = EmberGale;
