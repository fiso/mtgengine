"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepReconnaissance extends UnimplementedCard {
  constructor(game) {
    super(game, "Deep Reconnaissance", "Odyssey", "ODY");
  }
}

module.exports = DeepReconnaissance;
