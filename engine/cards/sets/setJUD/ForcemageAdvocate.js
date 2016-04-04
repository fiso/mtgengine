"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForcemageAdvocate extends Card {
  constructor(game) {
    super(game, "Forcemage Advocate", "Judgment", "JUD");
  }
}

module.exports = ForcemageAdvocate;
