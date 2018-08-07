"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravePact extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Pact", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = GravePact;
