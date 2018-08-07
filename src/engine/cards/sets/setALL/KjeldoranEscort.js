"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranEscort extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Escort", "Alliances", "ALL");
  }
}

module.exports = KjeldoranEscort;
