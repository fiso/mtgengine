"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalAffinity extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Affinity", "Eighth Edition", "8ED");
  }
}

module.exports = NaturalAffinity;
