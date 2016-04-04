"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalAffinity extends Card {
  constructor(game) {
    super(game, "Natural Affinity", "Eighth Edition", "8ED");
  }
}

module.exports = NaturalAffinity;
