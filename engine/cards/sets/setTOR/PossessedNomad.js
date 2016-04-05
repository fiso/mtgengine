"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PossessedNomad extends UnimplementedCard {
  constructor(game) {
    super(game, "Possessed Nomad", "Torment", "TOR");
  }
}

module.exports = PossessedNomad;
