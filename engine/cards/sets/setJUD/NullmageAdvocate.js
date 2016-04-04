"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullmageAdvocate extends Card {
  constructor(game) {
    super(game, "Nullmage Advocate", "Judgment", "JUD");
  }
}

module.exports = NullmageAdvocate;
