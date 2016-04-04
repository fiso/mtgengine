"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravePact extends Card {
  constructor(game) {
    super(game, "Grave Pact", "Eighth Edition", "8ED");
  }
}

module.exports = GravePact;
