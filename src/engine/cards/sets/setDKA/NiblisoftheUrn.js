"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NiblisoftheUrn extends UnimplementedCard {
  constructor (game) {
    super(game, "Niblis of the Urn", "Dark Ascension", "DKA");
  }
}

module.exports = NiblisoftheUrn;
