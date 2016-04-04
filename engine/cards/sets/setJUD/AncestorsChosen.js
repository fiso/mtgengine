"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncestorsChosen extends Card {
  constructor(game) {
    super(game, "Ancestor's Chosen", "Judgment", "JUD");
  }
}

module.exports = AncestorsChosen;
