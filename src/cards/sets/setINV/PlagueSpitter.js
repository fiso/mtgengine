"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueSpitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Spitter", "Invasion", "INV");
  }
}

module.exports = PlagueSpitter;
