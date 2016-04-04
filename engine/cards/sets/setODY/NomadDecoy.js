"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NomadDecoy extends Card {
  constructor(game) {
    super(game, "Nomad Decoy", "Odyssey", "ODY");
  }
}

module.exports = NomadDecoy;
