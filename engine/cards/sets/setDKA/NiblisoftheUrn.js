"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NiblisoftheUrn extends Card {
  constructor(game) {
    super(game, "Niblis of the Urn", "Dark Ascension", "DKA");
  }
}

module.exports = NiblisoftheUrn;
