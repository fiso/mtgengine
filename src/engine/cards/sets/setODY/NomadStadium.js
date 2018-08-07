"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadStadium extends UnimplementedCard {
  constructor (game) {
    super(game, "Nomad Stadium", "Odyssey", "ODY");
  }
}

module.exports = NomadStadium;
