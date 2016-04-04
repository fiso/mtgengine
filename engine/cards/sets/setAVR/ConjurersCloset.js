"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConjurersCloset extends Card {
  constructor(game) {
    super(game, "Conjurer's Closet", "Avacyn Restored", "AVR");
  }
}

module.exports = ConjurersCloset;
