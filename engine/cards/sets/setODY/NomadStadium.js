"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NomadStadium extends Card {
  constructor(game) {
    super(game, "Nomad Stadium", "Odyssey", "ODY");
  }
}

module.exports = NomadStadium;
