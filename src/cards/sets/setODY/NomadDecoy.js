"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadDecoy extends UnimplementedCard {
  constructor (game) {
    super(game, "Nomad Decoy", "Odyssey", "ODY");
  }
}

module.exports = NomadDecoy;
