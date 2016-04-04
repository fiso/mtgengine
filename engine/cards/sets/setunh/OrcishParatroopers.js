"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishParatroopers extends Card {
  constructor(game) {
    super(game, "Orcish Paratroopers", "Unhinged", "UNH");
  }
}

module.exports = OrcishParatroopers;
