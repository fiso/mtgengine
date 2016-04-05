"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamThrush extends UnimplementedCard {
  constructor(game) {
    super(game, "Dream Thrush", "Invasion", "INV");
  }
}

module.exports = DreamThrush;
