"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructiveUrge extends UnimplementedCard {
  constructor(game) {
    super(game, "Destructive Urge", "Urza's Saga", "USG");
  }
}

module.exports = DestructiveUrge;
