"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonsLawkeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon's Lawkeeper", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = GideonsLawkeeper;
