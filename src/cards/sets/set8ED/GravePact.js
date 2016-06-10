"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravePact extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Pact", "Eighth Edition", "8ED");
  }
}

module.exports = GravePact;
