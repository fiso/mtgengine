"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaskedGorgon extends Card {
  constructor(game) {
    super(game, "Masked Gorgon", "Judgment", "JUD");
  }
}

module.exports = MaskedGorgon;
