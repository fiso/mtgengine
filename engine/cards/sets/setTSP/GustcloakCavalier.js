"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GustcloakCavalier extends UnimplementedCard {
  constructor(game) {
    super(game, "Gustcloak Cavalier", "Time Spiral", "TSP");
  }
}

module.exports = GustcloakCavalier;
