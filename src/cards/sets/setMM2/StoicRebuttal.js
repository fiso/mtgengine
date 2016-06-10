"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoicRebuttal extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoic Rebuttal", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = StoicRebuttal;
