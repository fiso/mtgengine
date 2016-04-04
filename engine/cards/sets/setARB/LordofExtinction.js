"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordofExtinction extends Card {
  constructor(game) {
    super(game, "Lord of Extinction", "Alara Reborn", "ARB");
  }
}

module.exports = LordofExtinction;
