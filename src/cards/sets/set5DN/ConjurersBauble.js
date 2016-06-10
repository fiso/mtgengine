"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConjurersBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Conjurer's Bauble", "Fifth Dawn", "5DN");
  }
}

module.exports = ConjurersBauble;
