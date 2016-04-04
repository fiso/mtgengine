"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GustcloakCavalier extends Card {
  constructor(game) {
    super(game, "Gustcloak Cavalier", "Time Spiral", "TSP");
  }
}

module.exports = GustcloakCavalier;
