"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheMirariConjecture extends UnimplementedCard {
  constructor (game) {
    super(game, "The Mirari Conjecture", "Dominaria", "DOM");
  }
}

module.exports = TheMirariConjecture;
