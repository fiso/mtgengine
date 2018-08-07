"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PraetorsCounsel extends UnimplementedCard {
  constructor (game) {
    super(game, "Praetor's Counsel", "Commander Anthology", "CMA");
  }
}

module.exports = PraetorsCounsel;
