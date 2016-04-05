"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seance extends UnimplementedCard {
  constructor(game) {
    super(game, "Séance", "Dark Ascension", "DKA");
  }
}

module.exports = Seance;
