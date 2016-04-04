"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DestructiveUrge extends Card {
  constructor(game) {
    super(game, "Destructive Urge", "Urza's Saga", "USG");
  }
}

module.exports = DestructiveUrge;
