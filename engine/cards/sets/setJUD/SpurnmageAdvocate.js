"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpurnmageAdvocate extends UnimplementedCard {
  constructor(game) {
    super(game, "Spurnmage Advocate", "Judgment", "JUD");
  }
}

module.exports = SpurnmageAdvocate;
