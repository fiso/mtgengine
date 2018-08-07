"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalAffinity extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Affinity", "Ninth Edition", "9ED");
  }
}

module.exports = NaturalAffinity;
