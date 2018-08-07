"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TarnishedCitadel extends UnimplementedCard {
  constructor (game) {
    super(game, "Tarnished Citadel", "Odyssey", "ODY");
  }
}

module.exports = TarnishedCitadel;
