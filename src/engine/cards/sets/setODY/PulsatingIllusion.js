"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulsatingIllusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Pulsating Illusion", "Odyssey", "ODY");
  }
}

module.exports = PulsatingIllusion;
