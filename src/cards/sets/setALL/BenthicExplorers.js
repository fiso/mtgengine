"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenthicExplorers extends UnimplementedCard {
  constructor (game) {
    super(game, "Benthic Explorers", "Alliances", "ALL");
  }
}

module.exports = BenthicExplorers;
