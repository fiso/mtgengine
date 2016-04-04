"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConjurersBauble extends Card {
  constructor(game) {
    super(game, "Conjurer's Bauble", "Fifth Dawn", "5DN");
  }
}

module.exports = ConjurersBauble;
