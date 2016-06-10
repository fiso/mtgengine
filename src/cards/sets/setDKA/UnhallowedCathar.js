"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnhallowedCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Unhallowed Cathar", "Dark Ascension", "DKA");
  }
}

module.exports = UnhallowedCathar;
